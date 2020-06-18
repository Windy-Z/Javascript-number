// 定义各个按钮对应的功能函数

//判断当前选中的输入框输入内容是否为数字
function IsNumber(obj) { 
	var reNum = /^[0-9]+.?[0-9]*$/;
	return(reNum.test(obj));
};
function IsCheckedNumber(obj){
	for(i=0; i<obj.length-1; i++){
		if(obj[i].checked){
			var checkedValue = obj[i+1].value;
			if(IsNumber(checkedValue)){
				return '当前选中的输入框输入内容为数字';
			}else{
				return '当前选中的输入框输入内容不是数字';
			}
			break;
		}
	}
};

// 把A四舍五入为B个小数位
function AtoFixedB(obj){
	var numberA = obj[1].value * 1;
	var numberB = obj[3].value * 1;
	if(!IsNumber(numberA) || !IsNumber(numberB)){
		alert('输入的不是合法数字,请检查后重新输入');
	}else{
		return numberA.toFixed(parseInt(numberB));
	}
};


// 当前选中数字的绝对值
function absCheckedNumber(obj){
	for(i=0; i<obj.length-1; i++){
		if(obj[i].checked){
			var checkedValue = obj[i+1].value * 1;
			if(!IsNumber(checkedValue)){
				alert('输入的不是合法数字,请检查后重新输入');
			}else{
				return Math.abs(checkedValue);
				break;
			}
		}
	}
};


// 对当前选中的数字进行上舍入
function ceilCheckedNumber(obj){
	for(i=0; i<obj.length-1; i++){
		if(obj[i].checked){
			var checkedValue = obj[i+1].value * 1;
			if(!IsNumber(checkedValue)){
				alert('输入的不是合法数字,请检查后重新输入');
			}else{
				return Math.ceil(checkedValue);
				break;
			}
		}
	}
};


// 对当前选中的数字进行下舍入
function floorCheckedNumber(obj){
	for(i=0; i<obj.length-1; i++){
		if(obj[i].checked){
			var checkedValue = obj[i+1].value * 1;
			if(!IsNumber(checkedValue)){
				alert('输入的不是合法数字,请检查后重新输入');
			}else{
				return Math.floor(checkedValue);
				break;
			}
		}
	}
};


// 把当前选中的数字四舍五入为最接近的整数
function toFixedCheckedNumber(obj){
	for(i=0; i<obj.length-1; i++){
		if(obj[i].checked){
			var checkedValue = obj[i+1].value * 1;
			if(!IsNumber(checkedValue)){
				alert('输入的不是合法数字,请检查后重新输入');
			}else{
				return checkedValue.toFixed(0);
				break;
			}
		}
	}
};


// 返回A和B中的最高值
function BiggerNumber(obj){
	var numberA = obj[1].value * 1;
	var numberB = obj[3].value * 1;
	if(!IsNumber(numberA) || !IsNumber(numberB)){
		alert('输入的不是合法数字,请检查后重新输入');
	}else{
		if(numberA > numberB){
			return numberA;
		}else{
			return numberB;
		}
	}	
};

// 返回A和B中的最低值
function SmallerNumber(obj){
	var numberA = obj[1].value * 1;
	var numberB = obj[3].value * 1;
	if(!IsNumber(numberA) || !IsNumber(numberB)){
		alert('输入的不是合法数字,请检查后重新输入');
	}else{
		if(numberA < numberB){
			return numberA;
		}else{
			return numberB;
		}
	}
};


window.onload = function () {
    var input = document.querySelectorAll('input');
    var result;
    var btns = document.querySelectorAll("button");
    var res = document.getElementById('result');

    for (var i=0, length=btns.length; i<length; i++) {
        var btn = btns[i];
        //将btn所对应的下标保存在btn上
        btn.index = i;
        btn.onclick = function () {
            switch(this.index){
            	case 0:
            		result = IsCheckedNumber(input);
            		break;
            	case 1:
            		result = AtoFixedB(input);
            		break;
            	case 2:
            		result = absCheckedNumber(input);
            		break;
            	case 3:
            		result = ceilCheckedNumber(input);
            		break;
            	case 4:
            		result = floorCheckedNumber(input);
            		break;
            	case 5:
            		result = toFixedCheckedNumber(input);
            		break;
            	case 6:
            		result = BiggerNumber(input);
            		break;
            	case 7:
            		result = SmallerNumber(input);
            		break;
            }
            console.log(result);
        	res.innerHTML = result;
        };
    }   
};
