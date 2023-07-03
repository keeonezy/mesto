(()=>{"use strict";var t=document.querySelector(".profile__button-edit"),e=document.querySelector(".profile__button-add"),n=document.querySelector(".profile__button-change");function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o,i){var u=i.handleTrashCard,a=i.handleSetLike,c=i.handleRemoveLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._ownerId=e.owner._id,this._userId=o,this._templateSelector=n,this._handleCardClick=r,this._handleTrashCard=u,this._handleSetLike=a,this._handleRemoveLike=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"handleLikeCard",value:function(t){this._likes=t.likes,this._likesCounter.textContent=this._likes.length,this._likeButton.classList.toggle("card__like_active")}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("card__like_active")?t._handleRemoveLike():t._handleSetLike()})),this._deleteButton.addEventListener("click",(function(){return t._handleTrashCard()})),this._imageElement.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"deleteCard",value:function(){this._cardElement.remove()}},{key:"_checkOwner",value:function(){this._ownerId!==this._userId&&this._deleteButton.remove()}},{key:"_checkLikeCard",value:function(){var t=this;this._likes.find((function(e){return t._userId===e._id}))&&this._likeButton.classList.add("card__like_active")}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._likeButton=this._cardElement.querySelector(".card__like"),this._likesCounter=this._cardElement.querySelector(".card__like-number"),this._deleteButton=this._cardElement.querySelector(".card__trash"),this._imageElement=this._cardElement.querySelector(".card__image"),this._titleCard=this._cardElement.querySelector(".card__title"),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._titleCard.textContent=this._name,this._likesCounter.textContent=this._likes.length,this._checkLikeCard(),this._checkOwner(),this._setEventListeners(),this._cardElement}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var f=c((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_showError",(function(t,e){t.innerText=e.validationMessage,t.classList.add(r._options.inputErrorClass),e.classList.add(r._options.inputError)})),l(this,"_hiddenError",(function(t,e){t.innerText="",t.classList.remove(r._options.inputErrorClass),e.classList.remove(r._options.inputError)})),l(this,"_enableButton",(function(){r._submitButton.removeAttribute("disabled"),r._submitButton.classList.remove(r._options.disabledButtonClass)})),l(this,"disableButton",(function(){r._submitButton.setAttribute("disabled",!0),r._submitButton.classList.add(r._options.disabledButtonClass)})),l(this,"_setInputState",(function(t,e){var n=t.closest(r._options.inputSectionSelector).querySelector(r._options.inputErrorSelector);e?r._hiddenError(n,t):r._showError(n,t)})),l(this,"_toggleInputState",(function(t){var e=t.validity.valid;r._setInputState(t,e)})),l(this,"_toggleButtonState",(function(t){t.every((function(t){return t.validity.valid}))?r._enableButton():r.disableButton()})),l(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._toggleInputState(t),r._toggleButtonState(r._inputList)}))})),r._toggleButtonState(r._inputList)})),l(this,"enableValidation",(function(){r._setEventListeners()})),this._formElement=e,this._options=n,this._submitButton=this._formElement.querySelector(this._options.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._options.inputSelector))}));function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var h=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){t.target===t.currentTarget&&i.close()},(r=d(r="_handleOverlayClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(e),this._popupClose=this._popupElement.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupClose.addEventListener("click",(function(){t.close()})),this._popupElement.addEventListener("mousedown",this._handleOverlayClose)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageElement=e._popupElement.querySelector(".popup__image"),e._textElement=e._popupElement.querySelector(".popup__figcaption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._textElement.textContent=e,this._imageElement.src=n,this._imageElement.alt=e,v(g(u.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._submitButton=e._popupElement.querySelector(".popup__button"),e._submitButtonTextContent=e._submitButton.textContent,e}return e=u,(n=[{key:"setSubmit",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;k(j(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit()}))}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Удаление...":this._submitButtonTextContent}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=r,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._submitButton=n._formElement.querySelector(".popup__button"),n._submitButtonTextContent=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;B(I(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){B(I(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonTextContent}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var x=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var D=function(){function t(e){var n=e.userName,r=e.userAbout,o=e.userAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarElement=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userAboutElement.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t._id,o=t.avatar;this._userNameElement.textContent=e,this._userAboutElement.textContent=n,this._userId=r,this._userAvatarElement.src=o}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var H,M=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"editUserInfo",value:function(t){var e=t.name,n=t.about;return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})})}},{key:"editUserAvatar",value:function(t){var e=t.avatarInput;return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"setlike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"2b912826-2e01-41bd-a2c8-a9cb197269a0","Content-Type":"application/json"}}),z=new S(".popup_type_image"),$=function(t){var e=new i(t,".card-li",(function(){z.open(t)}),H,{handleTrashCard:function(){Z.open(),Z.setSubmit((function(){Z.renderLoading(!0),M.deleteCard(t._id).then((function(){e.deleteCard(),Z.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){Z.renderLoading(!1)}))}))},handleSetLike:function(){M.setlike(t._id).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))},handleRemoveLike:function(){M.deleteLike(t._id).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("Ошибка: ".concat(t))}))}});return e.generateCard()},G=new x({renderer:function(t){G.addItem($(t))}},".elements__list"),K=new D({userName:".profile__title",userAbout:".profile__about",userAvatar:".profile__avatar"});Promise.all([M.getInitialCards(),M.getUserInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H=i._id,K.setUserInfo(i),K.setUserInfo(i),G.renderItems(o)})).catch((function(t){console.log("Ошибка: ".concat(t))}));var Q=new q(".popup_type_avatar",{submitForm:function(t){var e=t.avatarInput;Q.renderLoading(!0),M.editUserAvatar({avatarInput:e}).then((function(t){K.setUserInfo(t),Q.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){Q.renderLoading(!1)}))}});n.addEventListener("click",(function(){Q.open(),tt.changeAvatar.disableButton()}));var W=new q(".popup_type_profile",{submitForm:function(t){var e=t.name,n=t.about;W.renderLoading(!0),M.editUserInfo({name:e,about:n}).then((function(t){K.setUserInfo(t),W.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){W.renderLoading(!1)}))}});t.addEventListener("click",(function(){W.open(),tt.editProfile.disableButton(),W.setInputValues(K.getUserInfo())}));var X=new q(".popup_type_card",{submitForm:function(t){var e=t.name,n=t.link;X.renderLoading(!0),M.addNewCard({name:e,link:n}).then((function(t){G.addItem($(t)),X.close()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){X.renderLoading(!1)}))}});e.addEventListener("click",(function(){X.open(),tt.addCard.disableButton()}));var Y,Z=new C(".popup_type_enter"),tt={};Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inputSectionSelector:".popup__section",disabledButtonClass:"popup__button_disabled",inputErrorSelector:".popup__error",inputError:"popup__input_error",inputErrorClass:"popup__error_active"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(t){var e=new f(t,Y),n=t.getAttribute("name");tt[n]=e,e.enableValidation()})),Z.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),z.setEventListeners()})();