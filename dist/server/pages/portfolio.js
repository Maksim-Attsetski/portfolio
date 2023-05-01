"use strict";
(() => {
var exports = {};
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 4307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5164);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__, _UI__WEBPACK_IMPORTED_MODULE_3__]);
([_widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__, _UI__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const scrollDownStyles = {
    direction: {
        input: [
            0,
            0.5,
            1
        ],
        output: [
            150,
            0,
            -150
        ]
    },
    opacity: {
        input: [
            0,
            0.5,
            1
        ],
        output: [
            0.4,
            1,
            0.4
        ]
    }
};
const Portfolio = ({ repos  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const htmlEl = document.querySelector("html");
        htmlEl?.classList.add("scrollable");
        return ()=>{
            htmlEl?.classList.remove("scrollable");
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "snap-center h-screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    repos[0]?.owner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .RepoOwner */ .Du, {
                        owner: repos[0].owner,
                        title: `My public repositories (${repos.length})`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
                        className: "justify-center my-11 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .RepoTitle */ .Mm, {
                            styles: scrollDownStyles,
                            dir: "y",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", {
                                children: [
                                    "Scroll",
                                    "\n",
                                    "Down",
                                    "\n",
                                    "⬇"
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_3__/* .List */ .aV, {
                containerClassname: "flex-col gap-4",
                data: repos,
                renderItem: (el)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .Repository */ ._j, {
                        repo: el
                    }),
                renderKey: (el)=>el.id
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const repos = await _widgets_Portfolio__WEBPACK_IMPORTED_MODULE_2__/* .portfolioService.getRepositories */ .Ue.getRepositories();
    return {
        props: {
            repos
        },
        revalidate: 20
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Portfolio));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4940);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI__WEBPACK_IMPORTED_MODULE_3__]);
_UI__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const RepoOwner = ({ owner , title  })=>{
    const username = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>owner.login.replace("-", " "), [
        owner.login
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UI__WEBPACK_IMPORTED_MODULE_3__/* .Flex */ .kC, {
        className: "gap-4 justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: owner.avatar_url,
                alt: owner.login,
                width: 100,
                height: 100,
                className: "rounded-full",
                priority: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-bold text-2xl",
                        children: username
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-lg",
                        children: title
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(RepoOwner));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const defaultStyles = {
    direction: {
        input: [
            0,
            0.4,
            1
        ],
        output: [
            -100,
            0,
            100
        ]
    },
    opacity: {
        input: [
            0,
            0.4,
            1
        ],
        output: [
            0,
            1,
            0
        ]
    }
};
const RepoTitle = ({ children , dir ="x" , styles =defaultStyles  })=>{
    const target = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useScroll)({
        target
    });
    const direction = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, styles.direction.input, styles.direction.output);
    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, styles.opacity.input, styles.opacity.output);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        ref: target,
        className: "text-title capitalize text-white",
        style: {
            [dir]: direction,
            opacity
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(RepoTitle));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9736:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6792);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4940);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _RepoTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_2__, _UI__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _RepoTitle__WEBPACK_IMPORTED_MODULE_5__]);
([_shared__WEBPACK_IMPORTED_MODULE_2__, _UI__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_4__, _RepoTitle__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getFadeUp = (y = 70, opacity = 0.4, delay = 0.2)=>({
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay
            }
        },
        hidden: {
            y,
            opacity
        }
    });
const descriptionFadeUp = getFadeUp();
const languageFadeUp = getFadeUp(90, 0.3, 0.4);
const buttonFadeUp = getFadeUp(110, 0.2, 0.6);
const Repository = ({ repo  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const inView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        style: {
            paddingTop: _shared__WEBPACK_IMPORTED_MODULE_2__/* .headerHeight */ .J9
        },
        className: "snap-center h-screen container flex justify-center items-center flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RepoTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: repo.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_3__/* .Gap */ .Zv, {
                y: 10
            }),
            repo.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                animate: descriptionFadeUp[inView ? "visible" : "hidden"],
                initial: false,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sub-title text-center",
                        style: {
                            maxWidth: 500
                        },
                        children: repo.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_3__/* .Gap */ .Zv, {
                        y: 10
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
                animate: languageFadeUp[inView ? "visible" : "hidden"],
                initial: false,
                className: "text-lg font-semibold",
                children: [
                    "language – ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: repo.language
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI__WEBPACK_IMPORTED_MODULE_3__/* .Gap */ .Zv, {
                y: 5
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                className: "border-white border-2 border-solid my-4 text-lg cursor-pointer",
                animate: buttonFadeUp[inView ? "visible" : "hidden"],
                initial: false,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.a, {
                    className: "px-8 py-3 block",
                    href: repo.svn_url,
                    target: "_blank",
                    children: "Open repo"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Repository));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8308:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Du": () => (/* reexport safe */ _RepoOwner__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Mm": () => (/* reexport safe */ _RepoTitle__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "_j": () => (/* reexport safe */ _Repository__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _RepoOwner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7241);
/* harmony import */ var _RepoTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2736);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9736);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RepoOwner__WEBPACK_IMPORTED_MODULE_0__, _RepoTitle__WEBPACK_IMPORTED_MODULE_1__, _Repository__WEBPACK_IMPORTED_MODULE_2__]);
([_RepoOwner__WEBPACK_IMPORTED_MODULE_0__, _RepoTitle__WEBPACK_IMPORTED_MODULE_1__, _Repository__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5164:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Du": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Du),
/* harmony export */   "Mm": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Mm),
/* harmony export */   "Ue": () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "_j": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__._j)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5716);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8308);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ portfolioService)
});

;// CONCATENATED MODULE: external "octokit"
const external_octokit_namespaceObject = require("octokit");
;// CONCATENATED MODULE: ./src/widgets/Portfolio/service.ts

class PortfolioService {
    async getRepositories() {
        try {
            const res = await new external_octokit_namespaceObject.Octokit().request("GET /users/{user}/repos", {
                user: "Maksim-Attsetski",
                sort: "updated",
                direction: "des"
            });
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
const portfolioService = new PortfolioService();


/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,792], () => (__webpack_exec__(4307)));
module.exports = __webpack_exports__;

})();