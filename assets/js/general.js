var money = $('#money_val');
var medal = $('#medal_val');
var blue = $('#blue_val');
var purple = $('#purple_val');
var tech = $('#tech_val');
var yellow = $('#yellow_val');
var display_container2 = 1;
var genNum=$('#genNum');
var ctx = genNum.getContext("2d");
$(document).ready(function() {
    // 监听资源输入框的变化
    $('.resedit').on('input', function() {
        var placeholder = $(this).attr('placeholder'); // 获取当前输入框的 placeholder 值
        var value = $(this).val(); // 获取输入框中的值
        
        // 根据 placeholder 值将值赋给相应的元素
        switch(placeholder) {
            case '金币':
                $('#money_val').text(value);
                break;
            case '勋章':
                $('#medal_val').text(value);
                break;
            case '工业':
                $('#blue_val').text(value);
                break;
            case '能源':
                $('#purple_val').text(value);
                break;
            case '科技':
                $('#tech_val').text(value);
                break;
            case '黄章':
                $('#yellow_val').text(value);
                break;
            default:
                break;
        }

        // 输出赋值后的变量
        console.log(placeholder + '=', value);
    });
    $('button').on('click', function() {
        // 修改container_2的display属性
        // 如果正在显示则关闭，否则反之
        if(display_container2){
            $('.container_2').css('display', 'none');
            display_container2=0;
        }else{
            $('.container_2').css('display', 'block'); 
            display_container2=1;
        }
    });
});
