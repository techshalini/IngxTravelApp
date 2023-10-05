sap.ui.define([

    "sap/ui/core/mvc/Controller",

    "sap/ui/model/Filter",

    "sap/ui/model/FilterOperator",

    "sap/ui/core/Fragment",
    "sap/ui/model/FilterType",

],

    /**

     * @param {typeof sap.ui.core.mvc.Controller} Controller

     */

    function (Controller,Filter,FilterOperator,Fragment,FilterType) {

        "use strict";

 

        return Controller.extend("travelrequest.controller.View1", {

            onInit: function () {
               
               var rejectBtn= this.getView().byId("table")
                if(rejectBtn.getVisible()) {

                    rejectBtn.setVisible(false);
     
                }
            },

            onpage4: function(oEvent){
                var oItem = oEvent.getSource();

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView4", {
                    invoicePath: window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
                });

            },

            onPress1: function () {

           

                var oRouter = this.getOwnerComponent().getRouter();

                oRouter.navTo("RouteView2");

            },

            onSearch: function(oEvent){
                var rejectBtn= this.getView().byId("table")
                if(!rejectBtn.getVisible()) {

                    rejectBtn.setVisible(true);
     
                }

             var oOrigin = this.getView().byId("input1").getValue();            
            //  var oOrigin1 = this.getView().byId("input2").getSelectedItem().getText();   
            //   var oOrigin2 = this.getView().byId("input3").getValue(); 
            //   var startDate=Date.parse(oOrigin2)           
             console.log(oOrigin);   
            //  console.log("hello");
            //  console.log(typeof(oOrigin2));      
            //  var oOrigin3 = this.getView().byId("input4").getValue();            

            //  var oSearch = oEvent.getParameter("query");
             var oFilter = new Filter("empId_Empid", FilterOperator.Contains, oOrigin);            
             var oFilter1 = new Filter("travelStatus", FilterOperator.Contains, oOrigin1);            
            //  var oFilter2 = new Filter("dateOfDeparture",FilterOperator.Contains, oOrigin2);            
            //  var oFilter3 = new Filter("",FilterOperator.Contains, oOrigin3);            

             var oList = this.getView().byId("table");

            //  var aFilter =[oFilter,oFilter1] ;

             oList.getBinding("items").filter(oFilter,FilterType.Application);
             oList.getBinding("items").filter(oFilter1,FilterType.Application);

 

            }

           

           

        });

    });