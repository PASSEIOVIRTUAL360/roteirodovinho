(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","class":"Player","hash": "bd18012904485769847574256f1571da0b316be5ea284ee3a7196a6ce2c249c5", "definitions": [{"class":"Panorama","frames":[{"cube":{"class":"ImageResource","levels":[{"width":24576,"url":"media/panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","height":4096,"colCount":24,"rowCount":4},{"width":12288,"url":"media/panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","class":"TiledImageResourceLevel","height":2048,"colCount":12,"rowCount":2},{"width":6144,"url":"media/panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":1024,"colCount":6,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_t.jpg"}],"overlays":["this.overlay_40011A79_65C6_4EBF_41C4_17DFFAF3286E"],"hfov":360,"vfov":180,"label":trans('panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0.label'),"data":{"label":"Balneario_aerea (6) copiar"},"id":"panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0","hfovMax":130,"thumbnailUrl":"media/panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_t.jpg"},{"class":"Video","video":"this.videores_6B5B4454_7F78_D0EE_41D8_A6A4FF568646","thumbnailUrl":"media/video_6C6F95E5_7F68_D3AE_41D0_D76FFBE8C9C3_t.jpg","data":{"label":"01"},"width":576,"height":1024,"id":"video_6C6F95E5_7F68_D3AE_41D0_D76FFBE8C9C3","label":trans('video_6C6F95E5_7F68_D3AE_41D0_D76FFBE8C9C3.label')},{"class":"ViewerArea","toolTipFontFamily":"Arial","playbackBarHeadShadow":true,"firstTransitionDuration":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"playbackBarBottom":5,"doubleClickAction":"none","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"minWidth":100,"minHeight":50,"vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"playbackBarProgressBorderSize":0,"progressRight":"33%","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"vrPointerSelectionTime":2000,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderRadius":0,"progressOpacity":0.7,"subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesGap":0,"progressBarBorderColor":"#000000","subtitlesBottom":50,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressBarBackgroundColorRatios":[0],"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","toolTipPaddingLeft":6,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"propagateClick":false,"id":"MainViewer","progressBackgroundColor":["#000000"],"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"progressBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","progressBarBorderRadius":2,"subtitlesTextShadowOpacity":1,"progressBarBorderSize":0,"playbackBarBorderColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderSize":0,"progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","vrPointerColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadHeight":15,"width":"100%","progressLeft":"33%","height":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderSize":0},{"class":"Video","video":"this.videores_6B69CA99_7F78_D066_41A7_11A3BF3EC4AF","thumbnailUrl":"media/video_6CD84680_7F68_F066_41D5_A97BCB36D3BC_t.jpg","data":{"label":"03"},"width":576,"height":1024,"id":"video_6CD84680_7F68_F066_41D5_A97BCB36D3BC","label":trans('video_6CD84680_7F68_F066_41D5_A97BCB36D3BC.label')},{"class":"Video","video":"this.videores_6B56E745_7F78_D0EE_41D3_7C78ED318368","thumbnailUrl":"media/video_6CE6CD8A_7F68_D07A_41D7_234FB4A13E6F_t.jpg","data":{"label":"02"},"width":576,"height":1024,"id":"video_6CE6CD8A_7F68_D07A_41D7_234FB4A13E6F","label":trans('video_6CE6CD8A_7F68_D07A_41D7_234FB4A13E6F.label')},{"class":"Video","video":"this.videores_6B6CAD16_7F78_D06A_41DF_A07C01F649AA","thumbnailUrl":"media/video_6CE7BCB9_7F68_F1A6_41DE_AC8EB5D88A0B_t.jpg","data":{"label":"04"},"width":576,"height":1024,"id":"video_6CE7BCB9_7F68_F1A6_41DE_AC8EB5D88A0B","label":trans('video_6CE7BCB9_7F68_F1A6_41DE_AC8EB5D88A0B.label')},{"initialSequence":"this.sequence_46028191_65C6_3A4C_41D4_862486DE06F3","class":"PanoramaCamera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":0,"duration":3000,"class":"TargetRotationalCameraDisplayMovement"}],"displayOriginPosition":{"hfov":165,"pitch":-90,"stereographicFactor":1,"yaw":0,"class":"RotationalCameraDisplayPosition"},"enterPointingToHorizon":true,"id":"panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_camera"},{"class":"Video","video":"this.videores_6B7BE27B_7F78_B09A_41DF_11CEDFEDD490","thumbnailUrl":"media/video_6CE73B1C_7F68_D09E_4195_CDD06E5888B8_t.jpg","data":{"label":"06"},"width":576,"height":1024,"id":"video_6CE73B1C_7F68_D09E_4195_CDD06E5888B8","label":trans('video_6CE73B1C_7F68_D09E_4195_CDD06E5888B8.label')},{"arrowKeysAction":"translate","displayPlaybackBar":true,"aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer"},{"viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"VideoPlayer","clickAction":"play_pause","id":"MainViewerVideoPlayer","displayPlayOverlay":true},{"items":[{"camera":"this.panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0_camera","media":"this.panorama_4097D47F_65C7_FAB3_41C7_FB93B26A34D0","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"media":"this.video_6C6F95E5_7F68_D3AE_41D0_D76FFBE8C9C3","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"media":"this.video_6CE6CD8A_7F68_D07A_41D7_234FB4A13E6F","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"media":"this.video_6CD84680_7F68_F066_41D5_A97BCB36D3BC","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 3, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 3)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"media":"this.video_6CE7BCB9_7F68_F1A6_41DE_AC8EB5D88A0B","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 4, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 4)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"media":"this.video_6CE7F43B_7F68_D09A_41DA_AD1130B13D66","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 5, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 5)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)"},{"media":"this.video_6CE73B1C_7F68_D09E_4195_CDD06E5888B8","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 6, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 6)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)"},{"media":"this.video_6CE751B6_7F68_B3AA_41D3_A909230F3A3C","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 7, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 7)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)"},{"media":"this.video_6CE70053_7F68_50EA_41CD_271184E4E921","class":"VideoPlayListItem","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.mainPlayList, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8)","player":"this.MainViewerVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList","class":"PlayList"},{"class":"Video","video":"this.videores_6B741E41_7F78_B0E6_41C0_9DC9CFA1DFC5","thumbnailUrl":"media/video_6CE70053_7F68_50EA_41CD_271184E4E921_t.jpg","data":{"label":"08"},"width":848,"height":478,"id":"video_6CE70053_7F68_50EA_41CD_271184E4E921","label":trans('video_6CE70053_7F68_50EA_41CD_271184E4E921.label')},{"class":"Video","video":"this.videores_6B614FB7_7F78_CFAA_41CE_8E4EC0DB66FC","thumbnailUrl":"media/video_6CE7F43B_7F68_D09A_41DA_AD1130B13D66_t.jpg","data":{"label":"05"},"width":576,"height":1024,"id":"video_6CE7F43B_7F68_D09A_41DA_AD1130B13D66","label":trans('video_6CE7F43B_7F68_D09A_41DA_AD1130B13D66.label')},{"class":"Video","video":"this.videores_6B7EF537_7F78_B0AA_41DA_CAEF3352AF78","thumbnailUrl":"media/video_6CE751B6_7F68_B3AA_41D3_A909230F3A3C_t.jpg","data":{"label":"07"},"width":1080,"height":1920,"id":"video_6CE751B6_7F68_B3AA_41D3_A909230F3A3C","label":trans('video_6CE751B6_7F68_B3AA_41D3_A909230F3A3C.label')},{"data":{"label":"5179255505984532510"},"maps":[],"class":"HotspotPanoramaOverlay","items":[{"pitch":13.49,"yaw":-19.42,"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"5179255505984532510"},"scaleMode":"fit_inside","show":"try{eval('window.turumDemo = function () {  const painel = document.createElement(\\'div\\');  painel.id = \\'categorias-painel\\';  painel.innerHTML = `    <div style=\"font-weight:bold;font-size:18px;color:#0066cc;margin-bottom:10px;\">Categorias 🗂️<\\/div>    <button style=\"margin-bottom:5px;\">🏖️ Praias<\\/button><br/>    <button style=\"margin-bottom:5px;\">🍽️ Restaurantes<\\/button><br/>    <button style=\"margin-bottom:5px;\">🏛️ Pontos de Interesse<\\/button><br/>    <button style=\"margin-bottom:5px;\">🅿️ Estacionamentos<\\/button>  `;  painel.style = `    position: absolute;    top: 20px;    right: 20px;    background: rgba(255,255,255,0.95);    border-radius: 10px;    padding: 15px;    box-shadow: 0 4px 15px rgba(0,0,0,0.2);    z-index: 1000;    font-family: sans-serif;    font-size: 16px;  `;  if (!document.getElementById(\\'categorias-painel\\')) {    document.body.appendChild(painel);  }};')}catch(e){console.log(e)}","image":"this.res_42563085_65C2_7A57_41CC_395ED4F85B69","hfov":10.5,"vfov":10.5}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_406AAEA1_65C6_464C_41C6_D8D7CC320E36"],"useHandCursor":true,"id":"overlay_40011A79_65C6_4EBF_41C4_17DFFAF3286E"},{"width":576,"levels":["this.videolevel_643F0E29_7EA8_70A6_41DA_0B9C3FCC0B0F"],"id":"videores_6B5B4454_7F78_D0EE_41D8_A6A4FF568646","class":"VideoResource","height":1024},{"width":576,"levels":["this.videolevel_643D5E9D_7EA8_719E_41DD_B063011D8A35"],"id":"videores_6B69CA99_7F78_D066_41A7_11A3BF3EC4AF","class":"VideoResource","height":1024},{"width":576,"levels":["this.videolevel_643CFE77_7EA8_70AA_41CC_E861FE59A1E3"],"id":"videores_6B56E745_7F78_D0EE_41D3_7C78ED318368","class":"VideoResource","height":1024},{"width":576,"levels":["this.videolevel_64026EC4_7EA8_71EF_4198_8F9A2915DA8F"],"id":"videores_6B6CAD16_7F78_D06A_41DF_A07C01F649AA","class":"VideoResource","height":1024},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_46028191_65C6_3A4C_41D4_862486DE06F3"},{"width":576,"levels":["this.videolevel_64038F33_7EA8_70AA_41DC_8E0A0517C4A4"],"id":"videores_6B7BE27B_7F78_B09A_41DF_11CEDFEDD490","class":"VideoResource","height":1024},{"width":848,"levels":["this.videolevel_6401DF85_7EA8_706E_41C3_A648600E131A"],"id":"videores_6B741E41_7F78_B0E6_41C0_9DC9CFA1DFC5","class":"VideoResource","height":478},{"width":576,"levels":["this.videolevel_6402BF01_7EA8_7066_41DB_6ED3DC6000BA"],"id":"videores_6B614FB7_7F78_CFAA_41CE_8E4EC0DB66FC","class":"VideoResource","height":1024},{"width":1080,"levels":["this.videolevel_6400AF5D_7EA8_709E_41BC_D4376DE530AE"],"id":"videores_6B7EF537_7F78_B0AA_41DA_CAEF3352AF78","class":"VideoResource","height":1920},{"levels":[{"width":413,"url":"media/res_42563085_65C2_7A57_41CC_395ED4F85B69_0.jpg","class":"ImageResourceLevel","height":413}],"id":"res_42563085_65C2_7A57_41CC_395ED4F85B69","class":"ImageResource"},{"click":"try{eval('turumDemo();')}catch(e){console.log(e)}","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_406AAEA1_65C6_464C_41C6_D8D7CC320E36"},{"width":576,"url":trans('videolevel_643F0E29_7EA8_70A6_41DA_0B9C3FCC0B0F.url'),"framerate":30,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_643F0E29_7EA8_70A6_41DA_0B9C3FCC0B0F.posterURL'),"bitrate":1327,"id":"videolevel_643F0E29_7EA8_70A6_41DA_0B9C3FCC0B0F"},{"width":576,"url":trans('videolevel_643D5E9D_7EA8_719E_41DD_B063011D8A35.url'),"framerate":29.31,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_643D5E9D_7EA8_719E_41DD_B063011D8A35.posterURL'),"bitrate":1296,"id":"videolevel_643D5E9D_7EA8_719E_41DD_B063011D8A35"},{"width":576,"url":trans('videolevel_643CFE77_7EA8_70AA_41CC_E861FE59A1E3.url'),"framerate":30,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_643CFE77_7EA8_70AA_41CC_E861FE59A1E3.posterURL'),"bitrate":1327,"id":"videolevel_643CFE77_7EA8_70AA_41CC_E861FE59A1E3"},{"width":576,"url":trans('videolevel_64026EC4_7EA8_71EF_4198_8F9A2915DA8F.url'),"framerate":30,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_64026EC4_7EA8_71EF_4198_8F9A2915DA8F.posterURL'),"bitrate":1327,"id":"videolevel_64026EC4_7EA8_71EF_4198_8F9A2915DA8F"},{"width":576,"url":trans('videolevel_64038F33_7EA8_70AA_41DC_8E0A0517C4A4.url'),"framerate":29.62,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_64038F33_7EA8_70AA_41DC_8E0A0517C4A4.posterURL'),"bitrate":1310,"id":"videolevel_64038F33_7EA8_70AA_41DC_8E0A0517C4A4"},{"width":848,"url":trans('videolevel_6401DF85_7EA8_706E_41C3_A648600E131A.url'),"framerate":30,"class":"VideoResourceLevel","height":478,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_6401DF85_7EA8_706E_41C3_A648600E131A.posterURL'),"bitrate":912,"id":"videolevel_6401DF85_7EA8_706E_41C3_A648600E131A"},{"width":576,"url":trans('videolevel_6402BF01_7EA8_7066_41DB_6ED3DC6000BA.url'),"framerate":30,"class":"VideoResourceLevel","height":1024,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_6402BF01_7EA8_7066_41DB_6ED3DC6000BA.posterURL'),"bitrate":1327,"id":"videolevel_6402BF01_7EA8_7066_41DB_6ED3DC6000BA"},{"width":1080,"url":trans('videolevel_6400AF5D_7EA8_709E_41BC_D4376DE530AE.url'),"framerate":60,"class":"VideoResourceLevel","height":1920,"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_6400AF5D_7EA8_709E_41BC_D4376DE530AE.posterURL'),"bitrate":8965,"id":"videolevel_6400AF5D_7EA8_709E_41BC_D4376DE530AE"}],"children":["this.MainViewer"],"propagateClick":false,"start":"this.init()","watermark":false,"id":"rootPlayer","data":{"history":{},"displayTooltipInTouchScreens":true,"name":"Player877","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false},"initialScale":0.5},"backgroundColor":["#FFFFFF"],"gap":10,"scrollBarMargin":2,"layout":"absolute","left":447.5,"minWidth":0,"minHeight":0,"backgroundColorRatios":[0],"height":"100%","width":"100%","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setLocale":TDV.Tour.Script.setLocale,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initQuiz":TDV.Tour.Script.initQuiz,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"clone":TDV.Tour.Script.clone,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openLink":TDV.Tour.Script.openLink,"createTween":TDV.Tour.Script.createTween,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPixels":TDV.Tour.Script.getPixels,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleVR":TDV.Tour.Script.toggleVR,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"init":TDV.Tour.Script.init,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"disableVR":TDV.Tour.Script.disableVR,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoForward":TDV.Tour.Script.historyGoForward,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizStart":TDV.Tour.Script.quizStart,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlays":TDV.Tour.Script.getOverlays,"historyGoBack":TDV.Tour.Script.historyGoBack,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"executeJS":TDV.Tour.Script.executeJS,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"mixObject":TDV.Tour.Script.mixObject,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showWindow":TDV.Tour.Script.showWindow,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"downloadFile":TDV.Tour.Script.downloadFile,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getKey":TDV.Tour.Script.getKey,"isPanorama":TDV.Tour.Script.isPanorama,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"translate":TDV.Tour.Script.translate,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Tue Apr 29 2025