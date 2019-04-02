/**
 *  超图PGIS图层创建类
 *
 *  @example
 *  /src/utils/openlayers 实例化参数
 *       {
 *         type: 'SuperMap',
 *          path: 'http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1',
 *          center: [117.2794, 31.9265],
 *          zoom: 10,
 *          layerCreator(path, view, TileLayer) {
 *            return new TileLayer({
 *              source: new TileSuperMapRest({
 *                url: path
 *              }),
 *              projection: 'EPSG:4326'
 *            })
 *          }
 *        }
 */

import {TileImage} from 'ol/source'
import {toSize} from 'ol/size'
import {createXYZ} from 'ol/tilegrid'
import TileGrid from 'ol/tilegrid/TileGrid'

const Unit = {
  /**  米 */
  METER: 'METER',
  /**  千米 */
  KILOMETER: 'KILOMETER',
  /**  英里 */
  MILE: 'MILE',
  /**  码 */
  YARD: 'YARD',
  /**  度 */
  DEGREE: 'DEGREE',
  /**  毫米 */
  MILLIMETER: 'MILLIMETER',
  /**  厘米 */
  CENTIMETER: 'CENTIMETER',
  /**  英寸 */
  INCH: 'INCH',
  /**  分米 */
  DECIMETER: 'DECIMETER',
  /**  英尺 */
  FOOT: 'FOOT',
  /**  秒 */
  SECOND: 'SECOND',
  /**  分 */
  MINUTE: 'MINUTE',
  /**  弧度 */
  RADIAN: 'RADIAN'
}

/**
 * @enum ServerType
 * @memberOf SuperMap
 * @description 服务器类型
 * @type {string}
 */
const ServerType = {
  /** ISERVER */
  ISERVER: 'ISERVER',
  /** IPORTAL */
  IPORTAL: 'IPORTAL',
  /** ONLINE */
  ONLINE: 'ONLINE'
}


/**
 * @function ol.supermap.Util.resolutionToScale
 * @description 通过分辨率计算比例尺。
 * @param {number} resolution - 分辨率。
 * @param {number} dpi - 屏幕分辨率。
 * @param {string} mapUnit - 地图单位。
 * @returns {number} 比例尺。
 */
function resolutionToScale(resolution, dpi, mapUnit) {
  let inchPerMeter = 1 / 0.0254;
  // 地球半径。
  let meterPerMapUnit = getMeterPerMapUnit(mapUnit);
  let scale = resolution * dpi * inchPerMeter * meterPerMapUnit;
  scale = 1 / scale;
  return scale;
}

/**
 * @function ol.supermap.Util.scaleToResolution
 * @description 通过比例尺计算分辨率。
 * @param {number} scale - 比例尺。
 * @param {number} dpi - 屏幕分辨率。
 * @param {string} mapUnit - 地图单位。
 * @returns {number} 分辨率。
 */
function scaleToResolution(scale, dpi, mapUnit) {
  let inchPerMeter = 1 / 0.0254;
  let meterPerMapUnitValue = this.getMeterPerMapUnit(mapUnit);
  let resolution = scale * dpi * inchPerMeter * meterPerMapUnitValue;
  resolution = 1 / resolution;
  return resolution;
}

/**
 * @private
 * @function ol.supermap.Util.getMeterPerMapUnit
 * @description 获取每地图单位多少米。
 * @param {string} mapUnit - 地图单位。
 * @returns {number} 返回每地图单位多少米。
 */
function getMeterPerMapUnit(mapUnit) {
  let earchRadiusInMeters = 6378137;
  let meterPerMapUnit;
  if (mapUnit === Unit.METER) {
    meterPerMapUnit = 1;
  } else if (mapUnit === Unit.DEGREE) {
    // 每度表示多少米。
    meterPerMapUnit = Math.PI * 2 * earchRadiusInMeters / 360;
  } else if (mapUnit === Unit.KILOMETER) {
    meterPerMapUnit = 1.0E-3;
  } else if (mapUnit === Unit.INCH) {
    meterPerMapUnit = 1 / 2.5399999918E-2;
  } else if (mapUnit === Unit.FOOT) {
    meterPerMapUnit = 0.3048;
  } else {
    return meterPerMapUnit;
  }
  return meterPerMapUnit;
}


/**
 * @class ol.source.TileSuperMapRest
 * @category iServer Map
 * @classdesc SuperMap iServer TileImage 图层源。
 * @param {Object} options - 参数。
 * @param {string} options.url - 服务地址。
 * @param {(ol.tilegrid.TileGrid|ol.tilegrid.TileGrid)} [options.tileGrid] - 瓦片网格对象。当不指定时，会通过 options.extent 或投影范围生成。
 * @param {SuperMap.ServerType} [options.serverType=ServerType.ISERVER] - 服务类型 iServer|iPortal|online。
 * @param {boolean} [options.redirect = false] - 是否重定向。
 * @param {boolean} [options.transparent = true] - 瓦片是否透明。
 * @param {boolean} [options.cacheEnabled = true] - 是否使用服务端的缓存。
 * @param {Object} [options.prjCoordSys] - 请求的地图的坐标参考系统。当此参数设置的坐标系统不同于地图的原有坐标系统时， 系统会进行动态投影，并返回动态投影后的地图瓦片。例如：{'epsgCode':3857}。
 * @param {string} [options.layersID] - 获取进行切片的地图图层 ID，即指定进行地图切片的图层，可以是临时图层集，也可以是当前地图中图层的组合。
 * @param {boolean} [options.clipRegionEnabled = false] - 是否只地图只显示该区域覆盖的部分。true 表示地图只显示该区域覆盖的部分。
 * @param {(ol.geom.Geometry|ol.geom.Geometry)} [options.clipRegion] - 地图显示裁剪的区域。是一个面对象，当 clipRegionEnabled = true 时有效，即地图只显示该区域覆盖的部分。
 * @param {boolean} [options.overlapDisplayed = false] - 地图对象在同一范围内时，是否重叠显示。如果为 true，则同一范围内的对象会直接压盖；如果为 false 则通过 overlapDisplayedOptions 控制对象不压盖显示。
 * @param {SuperMap.OverlapDisplayedOptions} [options.overlapDisplayedOptions] - 避免地图对象压盖显示的过滤选项，当 overlapDisplayed 为 false 时有效，用来增强对地图对象压盖时的处理。
 * @param {string} [options.tileversion] - 切片版本名称，_cache 为 true 时有效。
 * @param {string} [options.tileProxy] - 代理地址。
 * @param {string} [options.format = 'png'] - 瓦片表述类型，支持 'png' 、'bmp' 、'jpg' 和 'gif' 四种表述类型。
 * @extends {ol.source.TileImage}
 */
export default class TileSuperMapRest extends TileImage {

  constructor(options) {
    options = options || {};
    if (options.url === undefined) {
      return;
    }

    options.format = options.format ? options.format : 'png';
    let layerUrl = options.url + '/tileImage.' + options.format + '?';

    options.serverType = options.serverType || ServerType.ISERVER;
    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      logo: options.logo,
      opaque: options.opaque,
      projection: options.projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      state: options.state,
      tileClass: options.tileClass,
      tileGrid: options.tileGrid,
      tileLoadFunction: options.tileLoadFunction,
      tilePixelRatio: options.tilePixelRatio,
      tileUrlFunction: tileUrlFunction,
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX !== undefined ? options.wrapX : false,
      cacheEnabled: options.cacheEnabled,
      layersID: options.layersID
    });
    if (options.tileProxy) {
      this.tileProxy = options.tileProxy;
    }
    this.options = options;
    this._url = options.url;
    // 当前切片在切片集中的index
    this.tileSetsIndex = -1;
    this.tempIndex = -1;
    let me = this;

    /**
     * @function  ol.source.TileSuperMapRest.prototype.getAllRequestParams
     * @description 获取全部请求参数。
     */
    function getAllRequestParams() {
      let me = this,
        params = {};

      params['redirect'] = options.redirect !== undefined ? options.redirect : false;
      // 切片是否透明
      params['transparent'] = options.transparent !== undefined ? options.transparent : true;
      params['cacheEnabled'] = !(options.cacheEnabled === false);
      // 存储一个cacheEnabled参数
      me.cacheEnabled = params['cacheEnabled'];
      params['_cache'] = params['cacheEnabled'];

      // 设置切片原点
      if (this.origin) {
        params['origin'] = JSON.stringify({
          x: this.origin[0],
          y: this.origin[1]
        });
      }

      if (options.prjCoordSys) {
        params['prjCoordSys'] = JSON.stringify(options.prjCoordSys);
      }

      if (options.layersID) {
        params['layersID'] = options.layersID.toString();
      }

      if (!options.overlapDisplayed) {
        params['overlapDisplayed'] = false;
        if (options.overlapDisplayedOptions) {
          params['overlapDisplayedOptions'] = me.overlapDisplayedOptions.toString();
        }
      } else {
        params['overlapDisplayed'] = true;
      }

      if (options.cacheEnabled && options.tileversion) {
        params['tileversion'] = options.tileversion.toString();
      }

      return params;
    }

    /**
     * @function  ol.source.TileSuperMapRest.prototype.getFullRequestUrl
     * @description 获取完整的请求地址。
     */
    function getFullRequestUrl() {
      if (this._paramsChanged) {
        this._layerUrl = createLayerUrl.call(this);
        this._paramsChanged = false;
      }
      return this._layerUrl || createLayerUrl.call(this);
    }

    /**
     * @function  ol.source.TileSuperMapRest.prototype.createLayerUrl
     * @description 获取新建图层地址。
     */
    function createLayerUrl() {
      this._layerUrl = layerUrl + encodeURI(getRequestParamString.call(this));
      return this._layerUrl;
    }

    /**
     * @function  ol.source.TileSuperMapRest.prototype.getRequestParamString
     * @description 获取请求参数的字符串。
     */
    function getRequestParamString() {
      this.requestParams = this.requestParams || getAllRequestParams.call(this);
      let params = [];
      for (let key in this.requestParams) {
        params.push(key + '=' + this.requestParams[key]);
      }
      return params.join('&');
    }

    function tileUrlFunction(tileCoord, pixelRatio, projection) {
      if (!me.tileGrid) {
        if (me.extent) {
          me.tileGrid = TileSuperMapRest.createTileGrid(options.extent);
          if (me.resolutions) {
            me.tileGrid.resolutions = me.resolutions;
          }
        } else {
          if (projection.getCode() === 'EPSG:3857') {
            me.tileGrid = TileSuperMapRest.createTileGrid([-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892]);
            me.extent = [-20037508.3427892, -20037508.3427892, 20037508.3427892, 20037508.3427892];
          }
          if (projection.getCode() === 'EPSG:4326') {
            me.tileGrid = TileSuperMapRest.createTileGrid([-180, -90, 180, 90]);
            me.extent = [-180, -90, 180, 90];
          }
        }
      }
      me.origin = me.tileGrid.getOrigin(0);
      let z = tileCoord[0];
      let x = tileCoord[1];
      let y = -tileCoord[2] - 1;
      let resolution = me.tileGrid.getResolution(z);
      let dpi = 96;
      let unit = projection.getUnits();
      if (unit === 'degrees') {
        unit = Unit.DEGREE;
      }
      if (unit === 'm') {
        unit = Unit.METER;
      }
      let scale = resolutionToScale(resolution, dpi, unit);
      let tileSize = toSize(me.tileGrid.getTileSize(z, me.tmpSize));
      let layerUrl = getFullRequestUrl.call(me);
      let url = layerUrl + encodeURI('&x=' + x + '&y=' + y + '&width=' + tileSize[0] + '&height=' + tileSize[1] + '&scale=' + scale);
      // 支持代理
      if (me.tileProxy) {
        url = me.tileProxy + encodeURIComponent(url);
      }
      if (!me.cacheEnabled) {
        url += '&_t=' + new Date().getTime();
      }
      return url;
    }

  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.setTileSetsInfo
   * @description 设置瓦片集信息。
   * @param {Object} tileSets - 瓦片集合。
   */
  setTileSetsInfo(tileSets) {
    this.tileSets = tileSets;
    if (Array.isArray(this.tileSets)) {
      this.tileSets = tileSets[0];
    }
    if (!this.tileSets) {
      return;
    }
    this.dispatchEvent({
      type: 'tilesetsinfoloaded',
      value: {
        tileVersions: this.tileSets.tileVersions
      }
    });
    this.changeTilesVersion();
  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.lastTilesVersion
   * @description 请求上一个版本切片，并重新绘制。
   */
  lastTilesVersion() {
    this.tempIndex = this.tileSetsIndex - 1;
    this.changeTilesVersion();
  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.nextTilesVersion
   * @description 请求下一个版本切片，并重新绘制。
   */
  nextTilesVersion() {
    this.tempIndex = this.tileSetsIndex + 1;
    this.changeTilesVersion();
  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.changeTilesVersion
   * @description 切换到某一版本的切片，并重绘。通过 this.tempIndex 保存需要切换的版本索引。
   */
  changeTilesVersion() {
    let me = this;
    // 切片版本集信息是否存在
    if (me.tileSets == null) {
      return;
    }
    if (me.tempIndex === me.tileSetsIndex || this.tempIndex < 0) {
      return;
    }
    // 检测index是否可用
    let tileVersions = me.tileSets.tileVersions;
    if (tileVersions && me.tempIndex < tileVersions.length && me.tempIndex >= 0) {
      let name = tileVersions[me.tempIndex].name;
      let result = me.mergeTileVersionParam(name);
      if (result) {
        me.tileSetsIndex = me.tempIndex;
        me.dispatchEvent({
          type: 'tileversionschanged',
          value: {
            tileVersion: tileVersions[me.tempIndex]
          }
        });
      }
    }
  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.updateCurrentTileSetsIndex
   * @description 更新当前切片集索引，目前主要提供给控件使用。
   * @param {number} index - 索引号。
   */
  updateCurrentTileSetsIndex(index) {
    this.tempIndex = index;
  }

  /**
   * @function  ol.source.TileSuperMapRest.prototype.mergeTileVersionParam
   * @description 更改 URL 请求参数中的切片版本号，并重绘。
   * @param {Object} version - 版本信息。
   * @returns {boolean} 是否成功。
   */
  mergeTileVersionParam(version) {
    if (version) {
      this.requestParams['tileversion'] = version;
      this._paramsChanged = true;
      this.refresh();
      return true;
    }
    return false;
  }

  /**
   * @function  ol.source.TileSuperMapRest.optionsFromMapJSON
   * @description 从 MapJSON 中获取参数对象。
   * @param {string} url - 地址。
   * @param {Object} mapJSONObj - 地图 JSON 对象。
   */
  static optionsFromMapJSON(url, mapJSONObj) {
    let options = {};
    options.url = url;
    options.crossOrigin = 'anonymous';
    let extent = [mapJSONObj.bounds.left, mapJSONObj.bounds.bottom, mapJSONObj.bounds.right, mapJSONObj.bounds.top];
    let resolutions = getResolutions();

    function getResolutions() {
      let level = 17;
      let dpi = 96;
      let width = (extent[2] - extent[0]);
      let height = (extent[3] - extent[1]);
      let tileSize = width >= height ? width : height;
      let maxReolution;
      if (tileSize === width) {
        maxReolution = tileSize / mapJSONObj.viewer.width;
      } else {
        maxReolution = tileSize / mapJSONObj.viewer.height;
      }
      let resolutions = [];
      let unit = Unit.METER;
      if (mapJSONObj.coordUnit === Unit.DEGREE) {
        unit = Unit.DEGREE;
      }
      if (mapJSONObj.visibleScalesEnabled && mapJSONObj.visibleScales && mapJSONObj.visibleScales.length > 0) {
        for (let i = 0; i < mapJSONObj.visibleScales.length; i++) {
          resolutions.push(scaleToResolution(mapJSONObj.visibleScales[i], dpi, unit));
        }
      } else {
        for (let i = 0; i < level; i++) {
          resolutions.push(maxReolution / Math.pow(2, i));
        }
      }

      function sortNumber(a, b) {
        return b - a;
      }

      return resolutions.sort(sortNumber);
    }

    options.tileGrid = new TileGrid({
      extent: extent,
      resolutions: resolutions
    });
    return options;
  }

  /**
   * @function  ol.source.TileSuperMapRest.createTileGrid
   * @description 创建切片网格。
   * @param {number} extent - 长度。
   * @param {number} maxZoom - 最大的放大级别。
   * @param {number} minZoom - 最小的放大级别。
   * @param {number} tileSize - 瓦片的尺寸。
   * @param {number} origin - 原点。
   * */
  static createTileGrid(extent, maxZoom, minZoom, tileSize, origin) {
    let tilegrid = createXYZ({
      extent: extent,
      maxZoom: maxZoom,
      minZoom: minZoom,
      tileSize: tileSize
    });
    return new TileGrid({
      extent: extent,
      minZoom: minZoom,
      origin: origin,
      resolutions: tilegrid.getResolutions(),
      tileSize: tilegrid.getTileSize()
    });
  }
}
