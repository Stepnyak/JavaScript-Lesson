let vopros1=prompt("Ваш бюджет ?");
//confirm(vopros1);
alert(vopros1 + "  О этого достаточно ");
let vopros2 = prompt("Название вашего магазина?  ");
alert(vopros2 + "  Отлично я знаю этот магазин ");
let open=function(){console.log('Открыто')};
Staff={"Менеджер":'Курсинов',"Бухгалтер":'Манджиева ЛГ',"Продавец":'Иванова'};
shopGoods=['Стол','Табурет','Молоток','Шуруповерт'];
mainList = { "Бюджет": 5000,"Имя магазина":'Лакомка',Staff,shopGoods,open};
console.log(mainList);
console.log(mainList.shopGoods);
console.log(mainList.open());
console.log(mainList.Staff)
console.log(mainList);