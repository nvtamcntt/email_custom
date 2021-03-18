(function () {
  "use strict";

  kintone.events.on("app.record.index.show", function (event) {
    debugger;
    var myListTable = document.createElement("table");
    myListTable.id = "my_list_table";
    myListTable.style.border = "1px solid";
    myListTable.style.width = "600px";

    var records = event.records;
    // Loop in records retrieved
    for (var i = 0; i < records.length; i++) {
      var record = records[i];

      // Record number
      var myRecordTd1 = document.createElement("td");
      myRecordTd1.id = "my_record_td_" + i + "_1";
      myRecordTd1.style.border = "1px solid";
      myRecordTd1.innerHTML = record.Record_number.value;

      // Fruit
      var myRecordTd2 = document.createElement("td");
      myRecordTd2.id = "my_record_td_" + i + "_2";
      myRecordTd2.style.border = "1px solid";
      myRecordTd2.innerHTML = record.Fruit.value;

      // Created_datetime
      var myRecordTd3 = document.createElement("td");
      myRecordTd3.id = "my_record_td_" + i + "_3";
      myRecordTd3.style.border = "1px solid";
      myRecordTd3.innerHTML = record.Created_datetime.value;

      var myRecordTr = document.createElement("tr");
      myRecordTr.id = "my_record_tr_" + i;
      myRecordTr.appendChild(myRecordTd1);
      myRecordTr.appendChild(myRecordTd2);
      myRecordTr.appendChild(myRecordTd3);

      myListTable.appendChild(myRecordTr);
    }

    var myHeaderSpace = kintone.app.getHeaderSpaceElement();
    myHeaderSpace.innerHTML = "";
    myHeaderSpace.appendChild(myListTable);
  });
})();
