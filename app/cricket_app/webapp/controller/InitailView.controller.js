
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/BusyIndicator"
], (Controller,BusyIndicator) => {
    "use strict";

    return Controller.extend("com.cricketcap.cricketapp.controller.InitailView", {
        onInit() {
            // Adding code for Branch testing
            // Testing round 2
            BusyIndicator.show();
           var oModel = this.getOwnerComponent().getModel();
           oModel.read("/IndianTeam", {
            success: function(data){
                // console.log(data)
                var dataResults = data.results;
                var oJsonModel = new sap.ui.model.json.JSONModel(dataResults);
                this.getOwnerComponent().setModel(oJsonModel, "oJsonModel");
                console.log(data);
                sap.m.MessageToast.show("Data loaded and displayed")
                BusyIndicator.hide();
            }.bind(this),
            error: function (oError) {
                console.log(oError)
                BusyIndicator.hide();
            }
           })
            // var oBinding = oModel.bindList("/IndianTeam");

            // oBinding.requestContexts().then(function (aContexts) {
            //     var aData = aContexts.map(function (oContext) {
            //         return oContext.getObject();
            //     });
            //     console.log(aData);
            // });
        }
    });
});