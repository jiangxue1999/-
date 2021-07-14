Component({
  properties: {
    placeholder: {
      type: String,
      value: ''
    },
    inputValue: {
      type: String,
      value: ''
    },
    maxLength: {
      type: Number,
      value: -1
    },
    cursorSpacing: {
      type: Number,
      value: 84
    },
    tag: {
      type: String,
      value: ''
    },
    isPassword: {
      type: Boolean,
      value: false
    },
    autoFocus: {
      isShow1:true,
      type: Boolean,
      value: false
    }
  },
  data: {
    isShow1:false,
    placeholderValue: '',
    newPassword:''
  },
  methods: {
    onInput(e) {
      const { detail: { value } } = e
      const { properties: { tag } } = this
      this.setData({newPassword:value})
      this.triggerEvent('inputChange', { value, tag })
      if (value !== '') {
        this.setData({ placeholderValue: '' })
      } else {
        this.init()
      }
    },
    init() {
      const { properties: { placeholder, inputValue: value } } = this
      if (typeof value === 'undefined' || value === '') {
        this.setData({ placeholderValue: placeholder })
      }
    },
    showpassword(){
      if(this.data.isShow1){
        this.setData({isShow1:false});
        this.setData({inputValue:this.data.newPassword});
    }else{
      this.setData({isShow1:true});
      this.setData({inputValue:this.data.newPassword});
    }
    }
  },
  lifetimes: {
    attached() {
      this.init()
    }
  },
  observers: {
    inputValue: function(inputValue) {
      if (inputValue !== '') {
        this.setData({ placeholderValue: '' })
      }
    }
  }
})
