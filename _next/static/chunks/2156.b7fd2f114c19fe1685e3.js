"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2156], {
        6924: function(t, e, n) {
            n.d(e, {
                x: function() {
                    return d
                }
            });
            var i = n(7462),
                r = n(3366),
                o = n(7294),
                a = n(2212),
                s = function() {
                    a.InstancedBufferGeometry.call(this), this.type = "LineSegmentsGeometry";
                    this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]), this.setAttribute("position", new a.Float32BufferAttribute([-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], 3)), this.setAttribute("uv", new a.Float32BufferAttribute([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], 2))
                };
            s.prototype = Object.assign(Object.create(a.InstancedBufferGeometry.prototype), {
                constructor: s,
                isLineSegmentsGeometry: !0,
                applyMatrix4: function(t) {
                    var e = this.attributes.instanceStart,
                        n = this.attributes.instanceEnd;
                    return void 0 !== e && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                },
                setPositions: function(t) {
                    var e;
                    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
                    var n = new a.InstancedInterleavedBuffer(e, 6, 1);
                    return this.setAttribute("instanceStart", new a.InterleavedBufferAttribute(n, 3, 0)), this.setAttribute("instanceEnd", new a.InterleavedBufferAttribute(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this
                },
                setColors: function(t) {
                    var e;
                    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
                    var n = new a.InstancedInterleavedBuffer(e, 6, 1);
                    return this.setAttribute("instanceColorStart", new a.InterleavedBufferAttribute(n, 3, 0)), this.setAttribute("instanceColorEnd", new a.InterleavedBufferAttribute(n, 3, 3)), this
                },
                fromWireframeGeometry: function(t) {
                    return this.setPositions(t.attributes.position.array), this
                },
                fromEdgesGeometry: function(t) {
                    return this.setPositions(t.attributes.position.array), this
                },
                fromMesh: function(t) {
                    return this.fromWireframeGeometry(new a.WireframeGeometry(t.geometry)), this
                },
                fromLineSegments: function(t) {
                    var e = t.geometry;
                    if (!e.isGeometry) return e.isBufferGeometry && this.setPositions(e.attributes.position.array), this;
                    console.error("THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.")
                },
                computeBoundingBox: function() {
                    var t = new a.Box3;
                    return function() {
                        null === this.boundingBox && (this.boundingBox = new a.Box3);
                        var e = this.attributes.instanceStart,
                            n = this.attributes.instanceEnd;
                        void 0 !== e && void 0 !== n && (this.boundingBox.setFromBufferAttribute(e), t.setFromBufferAttribute(n), this.boundingBox.union(t))
                    }
                }(),
                computeBoundingSphere: function() {
                    var t = new a.Vector3;
                    return function() {
                        null === this.boundingSphere && (this.boundingSphere = new a.Sphere), null === this.boundingBox && this.computeBoundingBox();
                        var e = this.attributes.instanceStart,
                            n = this.attributes.instanceEnd;
                        if (void 0 !== e && void 0 !== n) {
                            var i = this.boundingSphere.center;
                            this.boundingBox.getCenter(i);
                            for (var r = 0, o = 0, s = e.count; o < s; o++) t.fromBufferAttribute(e, o), r = Math.max(r, i.distanceToSquared(t)), t.fromBufferAttribute(n, o), r = Math.max(r, i.distanceToSquared(t));
                            this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this)
                        }
                    }
                }(),
                toJSON: function() {},
                applyMatrix: function(t) {
                    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t)
                }
            });
            var c = function() {
                s.call(this), this.type = "LineGeometry"
            };
            c.prototype = Object.assign(Object.create(s.prototype), {
                constructor: c,
                isLineGeometry: !0,
                setPositions: function(t) {
                    for (var e = t.length - 3, n = new Float32Array(2 * e), i = 0; i < e; i += 3) n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
                    return s.prototype.setPositions.call(this, n), this
                },
                setColors: function(t) {
                    for (var e = t.length - 3, n = new Float32Array(2 * e), i = 0; i < e; i += 3) n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
                    return s.prototype.setColors.call(this, n), this
                },
                fromLine: function(t) {
                    var e = t.geometry;
                    if (!e.isGeometry) return e.isBufferGeometry && this.setPositions(e.attributes.position.array), this;
                    console.error("THREE.LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.")
                },
                copy: function() {
                    return this
                }
            }), a.UniformsLib.line = {
                linewidth: {
                    value: 1
                },
                resolution: {
                    value: new a.Vector2(1, 1)
                },
                dashScale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                dashOffset: {
                    value: 0
                },
                gapSize: {
                    value: 1
                },
                opacity: {
                    value: 1
                }
            }, a.ShaderLib.line = {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, a.UniformsLib.line]),
                vertexShader: "\n\t\t#include <common>\n\t\t#include <color_pars_vertex>\n\t\t#include <fog_pars_vertex>\n\t\t#include <logdepthbuf_pars_vertex>\n\t\t#include <clipping_planes_pars_vertex>\n\n\t\tuniform float linewidth;\n\t\tuniform vec2 resolution;\n\n\t\tattribute vec3 instanceStart;\n\t\tattribute vec3 instanceEnd;\n\n\t\tattribute vec3 instanceColorStart;\n\t\tattribute vec3 instanceColorEnd;\n\n\t\tvarying vec2 vUv;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashScale;\n\t\t\tattribute float instanceDistanceStart;\n\t\t\tattribute float instanceDistanceEnd;\n\t\t\tvarying float vLineDistance;\n\n\t\t#endif\n\n\t\tvoid trimSegment( const in vec4 start, inout vec4 end ) {\n\n\t\t\t// trim end segment so it terminates between the camera plane and the near plane\n\n\t\t\t// conservative estimate of the near plane\n\t\t\tfloat a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n\t\t\tfloat b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n\t\t\tfloat nearEstimate = - 0.5 * b / a;\n\n\t\t\tfloat alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n\t\t\tend.xyz = mix( start.xyz, end.xyz, alpha );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#ifdef USE_COLOR\n\n\t\t\t\tvColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n\t\t\t#endif\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n\n\t\t\t#endif\n\n\t\t\tfloat aspect = resolution.x / resolution.y;\n\n\t\t\tvUv = uv;\n\n\t\t\t// camera space\n\t\t\tvec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n\t\t\tvec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n\t\t\t// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n\t\t\t// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n\t\t\t// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n\t\t\t// perhaps there is a more elegant solution -- WestLangley\n\n\t\t\tbool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n\t\t\tif ( perspective ) {\n\n\t\t\t\tif ( start.z < 0.0 && end.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( start, end );\n\n\t\t\t\t} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( end, start );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// clip space\n\t\t\tvec4 clipStart = projectionMatrix * start;\n\t\t\tvec4 clipEnd = projectionMatrix * end;\n\n\t\t\t// ndc space\n\t\t\tvec2 ndcStart = clipStart.xy / clipStart.w;\n\t\t\tvec2 ndcEnd = clipEnd.xy / clipEnd.w;\n\n\t\t\t// direction\n\t\t\tvec2 dir = ndcEnd - ndcStart;\n\n\t\t\t// account for clip-space aspect ratio\n\t\t\tdir.x *= aspect;\n\t\t\tdir = normalize( dir );\n\n\t\t\t// perpendicular to dir\n\t\t\tvec2 offset = vec2( dir.y, - dir.x );\n\n\t\t\t// undo aspect ratio adjustment\n\t\t\tdir.x /= aspect;\n\t\t\toffset.x /= aspect;\n\n\t\t\t// sign flip\n\t\t\tif ( position.x < 0.0 ) offset *= - 1.0;\n\n\t\t\t// endcaps\n\t\t\tif ( position.y < 0.0 ) {\n\n\t\t\t\toffset += - dir;\n\n\t\t\t} else if ( position.y > 1.0 ) {\n\n\t\t\t\toffset += dir;\n\n\t\t\t}\n\n\t\t\t// adjust for linewidth\n\t\t\toffset *= linewidth;\n\n\t\t\t// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n\t\t\toffset /= resolution.y;\n\n\t\t\t// select end\n\t\t\tvec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n\t\t\t// back to clip space\n\t\t\toffset *= clip.w;\n\n\t\t\tclip.xy += offset;\n\n\t\t\tgl_Position = clip;\n\n\t\t\tvec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n\t\t\t#include <logdepthbuf_vertex>\n\t\t\t#include <clipping_planes_vertex>\n\t\t\t#include <fog_vertex>\n\n\t\t}\n\t\t",
                fragmentShader: "\n\t\tuniform vec3 diffuse;\n\t\tuniform float opacity;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashSize;\n\t\t\tuniform float dashOffset;\n\t\t\tuniform float gapSize;\n\n\t\t#endif\n\n\t\tvarying float vLineDistance;\n\n\t\t#include <common>\n\t\t#include <color_pars_fragment>\n\t\t#include <fog_pars_fragment>\n\t\t#include <logdepthbuf_pars_fragment>\n\t\t#include <clipping_planes_pars_fragment>\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\t#include <clipping_planes_fragment>\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tif ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n\t\t\t\tif ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n\t\t\t#endif\n\n\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\tfloat a = vUv.x;\n\t\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\t\tfloat len2 = a * a + b * b;\n\n\t\t\t\tif ( len2 > 1.0 ) discard;\n\n\t\t\t}\n\n\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t\t\t#include <logdepthbuf_fragment>\n\t\t\t#include <color_fragment>\n\n\t\t\tgl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <encodings_fragment>\n\t\t\t#include <fog_fragment>\n\t\t\t#include <premultiplied_alpha_fragment>\n\n\t\t}\n\t\t"
            };
            var u = function(t) {
                a.ShaderMaterial.call(this, {
                    type: "LineMaterial",
                    uniforms: a.UniformsUtils.clone(a.ShaderLib.line.uniforms),
                    vertexShader: a.ShaderLib.line.vertexShader,
                    fragmentShader: a.ShaderLib.line.fragmentShader,
                    clipping: !0
                }), this.dashed = !1, Object.defineProperties(this, {
                    color: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.diffuse.value
                        },
                        set: function(t) {
                            this.uniforms.diffuse.value = t
                        }
                    },
                    linewidth: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.linewidth.value
                        },
                        set: function(t) {
                            this.uniforms.linewidth.value = t
                        }
                    },
                    dashScale: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashScale.value
                        },
                        set: function(t) {
                            this.uniforms.dashScale.value = t
                        }
                    },
                    dashSize: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashSize.value
                        },
                        set: function(t) {
                            this.uniforms.dashSize.value = t
                        }
                    },
                    dashOffset: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.dashOffset.value
                        },
                        set: function(t) {
                            this.uniforms.dashOffset.value = t
                        }
                    },
                    gapSize: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.gapSize.value
                        },
                        set: function(t) {
                            this.uniforms.gapSize.value = t
                        }
                    },
                    opacity: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.opacity.value
                        },
                        set: function(t) {
                            this.uniforms.opacity.value = t
                        }
                    },
                    resolution: {
                        enumerable: !0,
                        get: function() {
                            return this.uniforms.resolution.value
                        },
                        set: function(t) {
                            this.uniforms.resolution.value.copy(t)
                        }
                    }
                }), this.setValues(t)
            };
            (u.prototype = Object.create(a.ShaderMaterial.prototype)).constructor = u, u.prototype.isLineMaterial = !0;
            var l = function(t, e) {
                void 0 === t && (t = new s), void 0 === e && (e = new u({
                    color: 16777215 * Math.random()
                })), a.Mesh.call(this, t, e), this.type = "LineSegments2"
            };
            l.prototype = Object.assign(Object.create(a.Mesh.prototype), {
                constructor: l,
                isLineSegments2: !0,
                computeLineDistances: function() {
                    var t = new a.Vector3,
                        e = new a.Vector3;
                    return function() {
                        for (var n = this.geometry, i = n.attributes.instanceStart, r = n.attributes.instanceEnd, o = new Float32Array(2 * i.data.count), s = 0, c = 0, u = i.data.count; s < u; s++, c += 2) t.fromBufferAttribute(i, s), e.fromBufferAttribute(r, s), o[c] = 0 === c ? 0 : o[c - 1], o[c + 1] = o[c] + t.distanceTo(e);
                        var l = new a.InstancedInterleavedBuffer(o, 2, 1);
                        return n.setAttribute("instanceDistanceStart", new a.InterleavedBufferAttribute(l, 1, 0)), n.setAttribute("instanceDistanceEnd", new a.InterleavedBufferAttribute(l, 1, 1)), this
                    }
                }(),
                raycast: function() {
                    var t = new a.Vector4,
                        e = new a.Vector4,
                        n = new a.Vector4,
                        i = new a.Vector3,
                        r = new a.Matrix4,
                        o = new a.Line3,
                        s = new a.Vector3;
                    return function(c, u) {
                        null === c.camera && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');
                        var l = void 0 !== c.params.Line2 && c.params.Line2.threshold || 0,
                            f = c.ray,
                            d = c.camera,
                            p = d.projectionMatrix,
                            m = this.geometry,
                            h = this.material,
                            v = h.resolution,
                            y = h.linewidth + l,
                            b = m.attributes.instanceStart,
                            g = m.attributes.instanceEnd,
                            S = -d.near;
                        f.at(1, n), n.w = 1, n.applyMatrix4(d.matrixWorldInverse), n.applyMatrix4(p), n.multiplyScalar(1 / n.w), n.x *= v.x / 2, n.y *= v.y / 2, n.z = 0, i.copy(n);
                        var x = this.matrixWorld;
                        r.multiplyMatrices(d.matrixWorldInverse, x);
                        for (var w = 0, A = b.count; w < A; w++) {
                            if (t.fromBufferAttribute(b, w), e.fromBufferAttribute(g, w), t.w = 1, e.w = 1, t.applyMatrix4(r), e.applyMatrix4(r), !(t.z > S && e.z > S)) {
                                if (t.z > S) {
                                    const n = t.z - e.z,
                                        i = (t.z - S) / n;
                                    t.lerp(e, i)
                                } else if (e.z > S) {
                                    const n = e.z - t.z,
                                        i = (e.z - S) / n;
                                    e.lerp(t, i)
                                }
                                t.applyMatrix4(p), e.applyMatrix4(p), t.multiplyScalar(1 / t.w), e.multiplyScalar(1 / e.w), t.x *= v.x / 2, t.y *= v.y / 2, e.x *= v.x / 2, e.y *= v.y / 2, o.start.copy(t), o.start.z = 0, o.end.copy(e), o.end.z = 0;
                                var E = o.closestPointToPointParameter(i, !0);
                                o.at(E, s);
                                var B = a.MathUtils.lerp(t.z, e.z, E),
                                    _ = B >= -1 && B <= 1,
                                    M = i.distanceTo(s) < .5 * y;
                                if (_ && M) {
                                    o.start.fromBufferAttribute(b, w), o.end.fromBufferAttribute(g, w), o.start.applyMatrix4(x), o.end.applyMatrix4(x);
                                    var z = new a.Vector3,
                                        L = new a.Vector3;
                                    f.distanceSqToSegment(o.start, o.end, L, z), u.push({
                                        point: L,
                                        pointOnLine: z,
                                        distance: f.origin.distanceTo(L),
                                        object: this,
                                        face: null,
                                        faceIndex: w,
                                        uv: null,
                                        uv2: null
                                    })
                                }
                            }
                        }
                    }
                }()
            });
            var f = function(t, e) {
                void 0 === t && (t = new c), void 0 === e && (e = new u({
                    color: 16777215 * Math.random()
                })), l.call(this, t, e), this.type = "Line2"
            };
            f.prototype = Object.assign(Object.create(l.prototype), {
                constructor: f,
                isLine2: !0
            });
            const d = (0, o.forwardRef)((function(t, e) {
                let {
                    points: n,
                    color: s = "black",
                    vertexColors: l,
                    lineWidth: d,
                    dashed: p
                } = t, m = (0, r.Z)(t, ["points", "color", "vertexColors", "lineWidth", "dashed"]);
                const [h] = (0, o.useState)((() => new f)), [v] = (0, o.useState)((() => new u)), [y] = (0, o.useState)((() => new a.Vector2(512, 512))), b = (0, o.useMemo)((() => {
                    const t = new c,
                        e = n.map((t => t instanceof a.Vector3 ? t.toArray() : t));
                    if (t.setPositions(e.flat()), l) {
                        const e = l.map((t => t instanceof a.Color ? t.toArray() : t));
                        t.setColors(e.flat())
                    }
                    return t
                }), [n, l]);
                return (0, o.useLayoutEffect)((() => {
                    h.computeLineDistances()
                }), [n, h]), (0, o.useLayoutEffect)((() => {
                    p ? v.defines.USE_DASH = "" : delete v.defines.USE_DASH, v.needsUpdate = !0
                }), [p, v]), (0, o.createElement)("primitive", (0, i.Z)({
                    dispose: void 0,
                    object: h,
                    ref: e
                }, m), (0, o.createElement)("primitive", {
                    dispose: void 0,
                    object: b,
                    attach: "geometry"
                }), (0, o.createElement)("primitive", (0, i.Z)({
                    dispose: void 0,
                    object: v,
                    attach: "material",
                    color: s,
                    vertexColors: Boolean(l),
                    resolution: y,
                    linewidth: d,
                    dashed: p
                }, m)))
            }))
        },
        9137: function(t, e, n) {
            n.d(e, {
                g: function() {
                    return o
                }
            });
            var i = n(7462),
                r = n(2212);

            function o(t, e, n, o) {
                return class extends r.ShaderMaterial {
                    constructor() {
                        const a = Object.entries(t);
                        super({
                            uniforms: a.reduce(((t, [e, n]) => {
                                const o = r.UniformsUtils.clone({
                                    [e]: {
                                        value: n
                                    }
                                });
                                return (0, i.Z)({}, t, o)
                            }), {}),
                            vertexShader: e,
                            fragmentShader: n
                        }), a.forEach((([t]) => Object.defineProperty(this, t, {
                            get: () => this.uniforms[t].value,
                            set: e => this.uniforms[t].value = e
                        }))), o && o(this)
                    }
                }
            }
        },
        6311: function(t, e, n) {
            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }

            function r(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(t); !(a = (i = n.next()).done) && (o.push(i.value), !e || o.length !== e); a = !0);
                        } catch (c) {
                            s = !0, r = c
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return o
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" === typeof t) return i(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);