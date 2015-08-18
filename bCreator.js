/* bCreator version 1.0.0, @license MIT, (c) 2015 Jay Lee. */

!function( window ) {
  var version = '1.0.0',
      arrBehaves = [],
      bCreator = function ( selector, obj ) {
        /* The bCreator is a factory that creates the bCreator.fn.init */
        return new bCreator.fn.init( selector, obj );
      };

  bCreator.fn = bCreator.prototype = {
    // bCreator version & constructor
    version: version,
    constructor: bCreator,

    // bCreator arguments
    items: [],
    supplier: {
      name     : '',
      corpName : '',
      regNumber: '',
      location : '',
      type     : '',
      category : ''
    },
    demander: {
      name     : '',
      corpName : '',
      regNumber: '',
      location : '',
      type     : '',
      category : ''
    },
    date: {
      // If the 'date' field does not have any values, it will be set as the current date.
      fullyear: new Date().getFullYear(),
      month: new Date().getMonth()+1,
      date: new Date().getDate()
    },
    identify: {
      volume      : '',
      number      : '',
      serialNumber: ''
    },
    note: '',
    isReceipt: true, isSupplier: true,
    taxRate: 1.1,

    // bCreator's selected DOM object.
    element: {},

    // bCreator object has a total price and tax
    totalPrice: 0, totalTax: 0,

    // bCreator's plain text of selected DOM object.
    selector: '',
    separator: function () {
      return [
        this.isSupplier ? bCreator.lang.supplier : bCreator.lang.demander,
        this.isReceipt ? bCreator.lang.received : bCreator.lang.demand
      ];
    },
    color: function () {
      return this.isSupplier ? "red" : "blue";
    },

    // Define of bCreator's default functions.
    callback: function () {
      return this;
    },

    // The arrBehaves is a private property;
    length: 0,
    push  : arrBehaves.push,
    sort  : arrBehaves.sort,
    splice: arrBehaves.splice,
    // Flush all of the elements except for the zeroth index ( refer to "build a layout" )
    flush: function() {
      if( this[ 0 ].firstChild ) {
        this[ 0 ].removeChild( this[ 0 ].firstChild );
      }

      this.splice( 1, this.length );

      return this;
    }
  };

  bCreator.extend = bCreator.fn.extend = function () {
    /**
    * For expanding bCreator's namespace. [ For plugin or merging object ]
    * - [ Simple ] Merge two objects.
    * - If target is 'this' then it will expands bCreator's namespace.
    */
    var o, i = 1,
      length = arguments.length,
      tgt = this,
      obj = arguments[ 0 ];

    if ( length > i ) {
      tgt = arguments[ i ];
    }

    for ( o in obj ) {
      tgt[ o ] = obj[ o ];
    }

    return tgt;
  };

  var init = bCreator.fn.init = function ( selector, obj ) {
    // If there is no selector, it will decide to return 'this'.
    var _selector = window.document.getElementById( selector );

    if ( !selector || !_selector )
      return this;

    // The selected element will be given to the users when it returns 'this'
    this.length = 1;
    this[ 0 ] = this.element = _selector;

    // Save the selector string.
    this.selector = selector;

    if ( obj ) {
      if ( obj.items ) {
        this.setItems( obj.items );
      }

      // Arguments initializing
      this.extend( obj );
    }

    return this;
  };

  init.prototype = bCreator.fn;

  bCreator.extend({
    /**
    * Outer Extensions
    */
    pushDivPrice: function ( elem, str, dest ) {
      elem = elem.getElementsByTagName( 'td' );

      for( var i = 1; i <= str.length; ++i ) {
        for( var j = 0; j < elem.length; ++j ) {
          if ( elem[j].getAttribute( 'name' ) === dest + i ) {
            elem[j].innerText != undefined
            ?
              elem[j].innerText = str.charAt( ( str.length - i ) )
              :
              elem[j].textContent = str.charAt( ( str.length - i ) );
            break;
          }
        }
      }

      return this;
    },

    setError: function ( string ) {
      console.error( 'bCreator Error: ' + string );
      return false;
    },

    lang : {
      supplier : "공급자",
      demander : "공급받는자",
      received : "영수",
      demand   : "청구"
    }
  });

  bCreator.fn.extend({
    /**
    * Inner Extensions
    */
    pushDivPrice: function () {
      var elem = document.getElementById( this.selector + '-bCreator-pay-cells' );

      if( elem ){
        bCreator
          .pushDivPrice( elem, this.totalPrice.toString(), 'bCreator-pay-' )
          .pushDivPrice( elem, this.totalTax.toString(), 'bCreator-tax-' );
      }

      return this;
    },

    setElement: function () {
      var elem = arguments.length > 1 ? arguments[ 0 ]: this[ this.length - 1 ],
          options = arguments.length > 1 ? arguments[ 1 ]: arguments[ 0 ];

      var currentElem = window.document.createElement( options.tag );

      /*
      * Push the element of the current process to the bCreator's array space.
      * Pushed elements can be used for modifying state of elements.
      */
      this.push( currentElem );

      for ( key in options ){
        switch(key){
          case 'append':
            this.setElement( options[ key ] );
            break;

          case 'class':
            currentElem.className = options[ key ];
            break;

          case 'text': 
            currentElem.innerText !== undefined
            ?
              currentElem.innerText = options[ key ]
              :
              currentElem.textContent = options[ key ];
            break;

          case 'tag': break;

          default: 
              currentElem.setAttribute
              ?
                currentElem.setAttribute( key, options[ key ] )
                :
                currentElem[ key ] = options[ key ];
        }
      }

      elem.appendChild( currentElem );

      return this;
    },

    setElementsGroup: function () {
      var i = 1,
          elem = arguments.length > i ? arguments[ 0 ]: this[ this.length - i ],
          optionsList = arguments.length > i ? arguments[ i ]: arguments[ 0 ];

      for ( ; i <= optionsList.length; ++i ){
        var options = optionsList[ i-1 ],
            isParent = false;

        /*
        * If an 'options' statement has a value in 'options.tag', it will create an element.
        * otherwise, just append a child element to the parent element.
        */
        if( options.tag ){
          var currentElem = window.document.createElement( options.tag );
          this.push( currentElem );
          isParent = true;
        }

        /*
        * Modify the current state of the element in progress or
        * append a child to it by executing the recursive call.
        */
        for ( key in options ){
          switch(key){
            case 'append':
              isParent ?
                this.setElementsGroup( options[ key ] )
                :
                this.setElementsGroup( elem, options[ key ] );
                break;

            case 'class':
              currentElem.className = options[ key ];
              break;

            case 'text': 
              currentElem.innerText !== undefined
              ?
                currentElem.innerText = options[ key ]
                :
                currentElem.textContent = options[ key ];
              break;

            case 'tag': break;

            default: 
              currentElem.setAttribute
              ?
                currentElem.setAttribute( key, options[ key ] )
                :
                currentElem[ key ] = options[ key ];
          }
        }

        if( options.tag ){
          elem.appendChild( currentElem );
        }
      }

      return this;
    },

    setItems: function ( items ) {
      /**
      * Calculate for the items sell price and tax
      */
      var i = 0,
          length = items ? items.length: 0;

      if ( !items ){
        return this;
      } else if ( length === undefined ) {
        items = [ items ];
      }

      for ( ; i<length; ++i ) {
        if ( items[ i ] ) {
          var j = 0;

          items[ i ].tax = j,
          items[ i ].totalprice = j,
          items[ i ].addedprice = j;

          if ( !items[ i ].price ) {
            return this;
          } else if ( !items[ i ].count ) {
            items[ i ].count = 1;
          }

          var tax = items[ i ].isDutyFree ? j : + Math.abs( Math.round( items[ i ].price/this.taxRate ) - items[ i ].price );

          for ( ; j < items[ i ].count; ++j ) {
            items[ i ].tax += tax;
            items[ i ].totalprice += items[ i ].price - tax;
            items[ i ].addedprice += items[ i ].price;
          }

          this.totalTax += items[ i ].tax;
          this.totalPrice += items[ i ].totalprice;
        }
      }

      this.extend({ items: this.items.concat( items ) });

      return this;
    },

    build: function ( layout ) {
      if ( !layout ) {
        return this;
      }
      /* Delete all the saved elements before build a layout by flush method.
         it will returns 'this' */
      return this.flush()./* Start build a layout */setElement({

        'tag': 'table',
        'cellSpacing': '0',
        'cellPadding': '0',
        'class': 'bCreator-' + this.color() + '-bill bCreator-bill'

      }).setElement({

        'tag': 'tbody'

      }).setElementsGroup( layout );
    }
  });

  window.bCreator = bCreator;

  return bCreator;
}(window);
