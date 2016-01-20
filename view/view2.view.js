sap.ui.jsview("view.view2", {

	/** Specifies the Controller belonging to this View.
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5-exploration.view.view2
	*/
	getControllerName : function() {
		return "controler.view2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
	* Since the Controller is given to this method, its event handlers can be attached right away.
	* @memberOf sapui5-exploration.view.view2
	*/
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "View2 Title",
			content: [

			]
		});
	}

});
