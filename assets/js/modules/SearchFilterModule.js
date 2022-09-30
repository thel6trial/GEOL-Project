export default function SearchFilterModule() {
    $(".filterChange").change(function() {
        searchAndShowData()
    })

    function searchAndShowData() {
        // trinh do
        var selectLevel = document.querySelector('#level');
        var valueLevel = selectLevel.options[selectLevel.selectedIndex].value;

        // lop
        var selectClass = document.querySelector('#class');
        var valueClass = selectClass.options[selectClass.selectedIndex].value;

        // so buoi
        var selectLesson = document.querySelector('#lesson');
        var valueLesson = selectLesson.options[selectLesson.selectedIndex].value;

        // thoi gian hoc
        // var selectDate = document.querySelector('#date');
        // var subDateNew = selectDate.options[selectDate.selectedIndex].value;
        var subDateNew = document.querySelector('#dateFilter').value;
        // console.log(subDateNew)
        var subDate = subDateNew.split('-');
        var dot = '.'
        var subDateNew = subDate[2].concat(dot, subDate[1]);

        // ngay hoc
        var selectDay = document.querySelector('#day');
        var valueDay = selectDay.options[selectDay.selectedIndex].value;

        if (valueLevel) {
            $(".data-row").hide();
            $(".trinh-do[data-value='" + valueLevel + "']").parents(".data-row").show();
        }

        var data_children = $(".data-row-children");

        data_children.show();
        for (let data_child of data_children) {
            data_child = $(data_child)

            // lop
            var data_child_class = data_child.children(".lop")
            var data_child_class_value = data_child_class.data("value")

            // so buoi
            var data_child_lesson = data_child.children(".so-buoi")
            var data_child_lesson_value = data_child_lesson.data("value")

            // thoi gian hoc
            var data_child_date = data_child.children(".thoi-gian-hoc")
            var data_child_date_value = data_child_date.data("value")

            // ngay hoc
            var data_child_day = data_child.children(".ngay-hoc")
            var data_child_day_value = data_child_day.data("value")

            var flag_arr = [];
            flag_arr.push(data_child_date_value.startsWith(subDateNew))
            if (valueClass) {
                flag_arr.push(valueClass == data_child_class_value)
            }

            if (valueLesson) {
                flag_arr.push(data_child_lesson_value == valueLesson)
            }

            if (valueDay) {
                flag_arr.push(valueDay == data_child_day_value)
            }

            if (flag_arr.length > 0) {
                if (flag_arr.every((currentValue) => currentValue)) {
                    data_child.show();
                } else {
                    data_child.hide();
                }
            }
        }

        // hide the row that have no data appears
        for (let data_row of $(".data-row")) {
            data_row = $(data_row)
            if (data_row.find(".data-row-children:visible").length == 0) {
                data_row.hide();
            }
        }
    }
    // date input type default value to Today
    var datePicker = document.getElementById("dateFilter");
    datePicker.valueAsDate = new Date();

    const searchFilter = document.querySelector('.searchFilter');
    if (searchFilter) {
        var clearFilterBtn = document.querySelector('.clearFilterBtn');
        clearFilterBtn.onclick = function() {
            datePicker.valueAsDate = new Date();
            $(".data-row").show();
            $(".data-row-children").show();
            $('.full-course-search select').val("");
        }
    }

}