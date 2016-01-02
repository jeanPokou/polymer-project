'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pdDrawer = (function () {
  function pdDrawer() {
    _classCallCheck(this, pdDrawer);
  }

  _createClass(pdDrawer, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'pdDrawer', this.properties = {
        drawerSidePosition: {
          type: Object,
          value: function value() {
            return {
              leftShow: true,
              rightShow: false
            };
          }
        },

        drawerPinPosition: {
          type: Object,
          value: function value() {
            return {
              pinLeft: true,
              pinRight: false
            };
          }
        },
        leftLocked: {
          type: Boolean,
          value: true
        },
        rightLocked: {
          type: Boolean,
          value: false

        },
        leftShow: {
          type: Boolean,
          value: true
        },
        rightShow: {
          type: Boolean,
          value: false
        },
        mainClasses: {
          type: String,
          computed: '_computeClass(leftShow,rightShow,leftLocked,rightLocked)'
        }

      };
    }
  }]);

  return pdDrawer;
})();

Polymer(pdDrawer);
// Polymer({
//   is: 'pd-drawer',
//   properties:{
//
//     drawerSidePosition:{
//       type:Object,
//       value:function () {
//           return {
//             leftShow:true,
//             rightShow:false
//           };
//       }
//     },
//
//     drawerPinPosition:{
//       type:Object,
//       value:function(){
//         return {
//           pinLeft:true,
//           pinRight:false
//         }
//       }
//     },
//     leftLocked:{
//       type: Boolean,
//       value:true
//     },
//     rightLocked:{
//       type: Boolean,
//       value:false
//
//     },
//     leftShow:{
//       type:Boolean,
//       value:true
//     },
//     rightShow:{
//       type: Boolean,
//       value:false
//     },
//     mainClasses:{
//       type:String,
//       computed:'_computeClass(leftShow,rightShow,leftLocked,rightLocked)'
//     }
//
//
//   },
//   toggleSidePosition:function (pos) {
//       this.drawerSidePosition[pos]=!this.drawerSidePosition[pos];
//     if(pos === 'leftShow')
//     this.drawerSidePosition['rightShow']=!this.drawerSidePosition['rightShow'];
//     else {
//         this.drawerSidePosition['leftShow']=!this.drawerSidePosition['leftShow'];
//     }
//   },
//   togglePinPosition :function (pin) {
//     this.drawerPinPosition[pin]=!this.drawerPinPosition[pin];
//     if(pos === 'leftpin'){
//       this.drawerPinPosition['rightLocked']
//     }
//   },
//   _computeClass:function () {
//
//
//   },
//   toggleLeft:function () {
//     this.rightShow = false;
//     this.leftShow = !this.leftShow;
//   },
//   toggleRight:function () {
//     this.leftShow = false;
//     this.rightShow =! this.rightShow;
//   },
//   pinLeft:function () {
//     this.leftLocked=!this.rightLocked;
//     // this.closeDrawers();
//     // this.mobileModeCheck();
//   },
//   pinRight:function () {
//     this.rightLocked=!this.rightLocked;
//     // this.closeDrawers();
//     // this.mobileModeCheck();
//   }
// });