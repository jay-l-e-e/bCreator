/*
* bCreator version 1.0.0, @license MIT, (c) 2015 Jay Lee.
* Tax invoice layout for the bCreator. it can be customized anyways.
*/
bCreator.fn.extend({
  taxLayout : function() {
    return this.build([
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '세 금 계 산 서 ( ' + this.separator()[0] + ' 보관용 )', 'colSpan': '19', 'rowSpan': '2', 'class': 'title' },
          { 'tag': 'th', 'text': '책 번 호', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.identify.volume+'(권)', 'colSpan': '4' },
          { 'tag': 'td', 'text': this.identify.number+'(호)', 'colSpan': '4' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '일련번호', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.identify.serialNumber, 'colSpan': '8', 'class': 'bCreator-letter-spacing' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '공\n급\n자', 'rowSpan': '4' },
          { 'tag': 'th', 'text': '등 록\n번 호', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.supplier.regNumber, 'colSpan': '11', 'class': 'bCreator-letter-spacing' },
          { 'tag': 'th', 'text': '공\n급\n받\n는\n자', 'rowSpan': '4' },
          { 'tag': 'th', 'text': '등 록\n번 호', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.demander.regNumber, 'colSpan': '11', 'class': 'bCreator-letter-spacing' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '상 호\n(법인명)', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.supplier.corpName, 'colSpan': '5' },
          { 'tag': 'th', 'text': '성\n명', 'colSpan': '1' },
          { 'tag': 'td', 'text': this.supplier.name, 'colSpan': '5' },
          { 'tag': 'th', 'text': '상 호\n(법인명)', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.demander.corpName, 'colSpan': '5' },
          { 'tag': 'th', 'text': '성\n명', 'colSpan': '1' },
          { 'tag': 'td', 'text': this.demander.name, 'colSpan': '5' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '사업장\n주소', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.supplier.location, 'colSpan': '11' },
          { 'tag': 'th', 'text': '사업장\n주소', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.demander.location, 'colSpan': '11' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '업태', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.supplier.category, 'colSpan': '5' },
          { 'tag': 'th', 'text': '종\n목', 'colSpan': '1' },
          { 'tag': 'td', 'text': this.supplier.type, 'colSpan': '5' },
          { 'tag': 'th', 'text': '업태', 'colSpan': '3' },
          { 'tag': 'td', 'text': this.demander.category, 'colSpan': '5' },
          { 'tag': 'th', 'text': '종\n목', 'colSpan': '1' },
          { 'tag': 'td', 'text': this.demander.type, 'colSpan': '5' }
        ]
      },
      {
        'tag': 'tr', 'class': 'bCreator-border-top',
        append : [
          { 'tag': 'th', 'text': '작 성', 'colSpan': '4', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '공 급 가 액', 'colSpan': '13', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '세 액', 'colSpan': '10', 'class': 'bCreator-border-right bCreator-border-left' },
          { 'tag': 'th', 'text': '비 고', 'colSpan': '3', 'class': 'bCreator-border-right' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '년', 'colSpan': '2', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '월' },
          { 'tag': 'th', 'text': '일' },
          { 'tag': 'th', 'text': '공란수', 'colSpan': '2', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '백', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '십' },
          { 'tag': 'th', 'text': '억', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '천' },
          { 'tag': 'th', 'text': '백' },
          { 'tag': 'th', 'text': '십', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '만' },
          { 'tag': 'th', 'text': '천' },
          { 'tag': 'th', 'text': '백', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '십' },
          { 'tag': 'th', 'text': '일' },
          { 'tag': 'th', 'text': '십', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '억', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '천' },
          { 'tag': 'th', 'text': '백' },
          { 'tag': 'th', 'text': '십', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '만' },
          { 'tag': 'th', 'text': '천' },
          { 'tag': 'th', 'text': '백', 'class': 'bCreator-border-left' },
          { 'tag': 'th', 'text': '십' },
          { 'tag': 'th', 'text': '일', 'class': 'bCreator-border-right' },
          { 'tag': 'td', 'text': this.note, 'colSpan': '3', 'rowSpan': '2', 'class': 'bCreator-border-right' }
        ]
      },
      {
        'tag': 'tr', 'class': 'bCreator-high-row', 'id': this.selector + '-bCreator-pay-cells',
        append : [
          { 'tag': 'td', 'text': this.date.fullyear, 'colSpan': '2', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'text': this.date.month },
          { 'tag': 'td', 'text': this.date.date },
          { 'tag': 'td', 'text': ( 11-this.totalPrice.toString().length ), 'colSpan': '2', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-pay-11', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-pay-10' },
          { 'tag': 'td', 'name': 'bCreator-pay-9', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-pay-8' },
          { 'tag': 'td', 'name': 'bCreator-pay-7' },
          { 'tag': 'td', 'name': 'bCreator-pay-6', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-pay-5' },
          { 'tag': 'td', 'name': 'bCreator-pay-4' },
          { 'tag': 'td', 'name': 'bCreator-pay-3', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-pay-2' },
          { 'tag': 'td', 'name': 'bCreator-pay-1' },
          { 'tag': 'td', 'name': 'bCreator-tax-10', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-tax-9', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-tax-8' },
          { 'tag': 'td', 'name': 'bCreator-tax-7' },
          { 'tag': 'td', 'name': 'bCreator-tax-6', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-tax-5' },
          { 'tag': 'td', 'name': 'bCreator-tax-4' },
          { 'tag': 'td', 'name': 'bCreator-tax-3', 'class': 'bCreator-border-left' },
          { 'tag': 'td', 'name': 'bCreator-tax-2' },
          { 'tag': 'td', 'name': 'bCreator-tax-1', 'class': 'bCreator-border-right' }
        ]
      },
      {
        'tag': 'tr', 'class': 'bCreator-border-top',
        append : [
          { 'tag': 'th', 'text': '월' },
          { 'tag': 'th', 'text': '일' },
          { 'tag': 'th', 'text': '품목 / 규격', 'colSpan': '9' },
          { 'tag': 'th', 'text': '단위', 'colSpan': '2' },
          { 'tag': 'th', 'text': '수량', 'colSpan': '2' },
          { 'tag': 'th', 'text': '단가', 'colSpan': '4' },
          { 'tag': 'th', 'text': '공급가액', 'colSpan': '5' },
          { 'tag': 'th', 'text': '세액', 'colSpan': '4' },
          { 'tag': 'th', 'text': '비고', 'colSpan': '2' }
        ]
      },
      {
        append: this.taxItemsLayout()
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'th', 'text': '합계금액', 'colSpan': '5' },
          { 'tag': 'th', 'text': '현금', 'colSpan': '5' },
          { 'tag': 'th', 'text': '수표', 'colSpan': '5' },
          { 'tag': 'th', 'text': '어음', 'colSpan': '5' },
          { 'tag': 'th', 'text': '외상미수금', 'colSpan': '5' },
          { 'tag': 'th', 'text': '이 금액을 ' + this.separator()[1] + ' 함.', 'colSpan': '5', 'rowSpan': '2' }
        ]
      },
      {
        'tag': 'tr',
        append : [
          { 'tag': 'td', 'text': ( this.totalPrice + this.totalTax ).toLocaleString().split( '.' )[0] + ' 원', 'colSpan': '5' },
          { 'tag': 'td', 'text': ( this.totalPrice + this.totalTax ).toLocaleString().split( '.' )[0] + ' 원', 'colSpan': '5' },
          { 'tag': 'td', 'text': 0 + ' 원', 'colSpan': '5' },
          { 'tag': 'td', 'text': 0 + ' 원', 'colSpan': '5' },
          { 'tag': 'td', 'text': 0 + ' 원', 'colSpan': '5' }
        ]
      },
      {
        'tag': 'tr', 'class': 'hidden',
        append : [
          { 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },
          { 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },
          { 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },
          { 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },
          { 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' },{ 'tag': 'td' }
        ]
      }
    ]).pushDivPrice().callback( this );
  },
  
  taxItemsLayout : function() {
    var i = 0,
        itemRows = [],
        items = this.items,
        tmpItems = [],
        length = items.length
        totalPrice = this.totalPrice,
        totalTax = this.totalTax;

    for ( ; i < 4; ++i ) {
      var even   = '',
          _items = {
            name       : '',
            count      : '',
            unit       : '',
            price      : '',
            totalprice : '',
            tax        : '',
            month      : '',
            day        : ''
          };

      if ( i % 2 === 1 ) {
        even = 'bCreator-even';
      }

      if ( items[ i ] && ( i < 4 ) ) {
          _items = items[ i ];
      }

      if ( i === 3 && length > 4 ) {
        even = 'bCreator-even';
        _items = {
          name       : items[ 3 ].name + '외 ' + ( length - 4 ) + '개',
          count      : '',
          unit       : '',
          price      : '',
          totalprice : totalPrice,
          tax        : totalTax,
          month      : items[ i ].month,
          day        : items[ i ].day,
          note       : items[ i ].note
        };
      } else if ( i < 3 && length > 4 ) {
        totalPrice -= items [ i ].totalprice;
        totalTax -= items[ i ].tax;
      } else if ( length < 4 && i === length ){
        _items = {
          name       : '-- 이하여백 --',
          count      : '',
          unit       : '',
          price      : '',
          totalprice : '',
          tax        : '',
          month      : '',
          day        : ''
        };
      }

      itemRows.push({

        'tag': 'tr',
        'class': even,

        append : [
          { 'tag': 'td', 'text': _items.month ? _items.month : '' },
          { 'tag': 'td', 'text': _items.day ? _items.day : '' },
          { 'tag': 'td', 'text': _items.name ? _items.name : '', 'colSpan': '9' },
          { 'tag': 'td', 'text': _items.unit ? _items.unit : '', 'colSpan': '2' },
          { 'tag': 'td', 'text': _items.count ? _items.count : '', 'colSpan': '2' },
          { 'tag': 'td', 'text': _items.price ? _items.price.toLocaleString().split( '.' )[0] + '원' : '', 'colSpan': '4' },
          { 'tag': 'td', 'text': _items.totalprice ? _items.totalprice.toLocaleString().split( '.' )[0] + '원' : '', 'colSpan': '5' },
          { 'tag': 'td', 'text': _items.tax ? _items.tax.toLocaleString().split( '.' )[0] + '원' : '', 'colSpan': '4' },
          { 'tag': 'td', 'text': _items.note ? _items.note : '', 'colSpan': '2' }
        ]

      });
    }

    return itemRows;
  }
});
