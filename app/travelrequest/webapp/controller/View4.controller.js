sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("travelrequest.controller.View4", {
        onInit() {
          var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteView4").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
          this.getView().bindElement({
            path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath)
          });
        }
      });
    }
  );
  