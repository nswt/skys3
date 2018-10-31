define(function(require) {
	var Model = {};

	Model.btnQueryClick = function(event) {
		$("#mainListTable").loadTableData($("#queryForm").getElementsJson());
	};
	//进入生成明细页面
	Model.showRunPage = function(row) {
		if (row["coderFlag"] == 1) {
			$.confirm("代码已生成，需要重新生成吗？", function(result) {
				if (result) {
					runCoder1(row);
				}
			});
		} else {
			runCoder1(row);
		}
	};
	//进入页面
	var runCoder1 = function(row) {
		$.showPage("toolkit/coder/coder.w", {"tableName":row["tableName"],"coderId":row["coderId"]});
	}
	Model.handleRender = function(value, row, index) {
		var text = "<button class='btn btn-link icon-laptop btnUpdate' onclick='javascript:Model.showRunPage(\""
				+ row["tableName"]
				+ "\",\""
				+ row["coderFlag"]
				+ "\")'>代码生成</button>";
		if (row["coderFlag"] == "1") {
			text += "<button class='btn btn-link linear linear-cross btnDel'>代码刪除</button>";
		}
		return text;
	};

	return Model;
});