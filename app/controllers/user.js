import Controller from '@ember/controller';

export default Controller.extend({
  applicationsaved: "",
  errors: {},
  actions: {
    createApplication() {

      this.set('applicationsaved', "")
      this.set('errors.name', '')
      this.set('errors.age', '')
      this.set('errors.phone', '')
      this.set('errors.email', '')


      var name = this.get('name')
      var age = this.get('age')
      var phone = this.get('phone')
      var email = this.get('email')

      var flag = 0;

      if(/^[a-zA-Z]+ [a-zA-Z]+$/.test(name) == false){
        flag = 1;
        this.set('errors.name', 'Invalid name given, please mantain proper space.')
      }

      if(/^\S[0-9]{0,3}$/.test(age)  == false){
         flag = 1;
        this.set('errors.age', 'Invalid age given.')
      }

      if(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone) == false){
        flag = 1;
        this.set('errors.phone', 'Invalid phone number given.')
      }

      
      if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false){
        flag = 1;
        this.set('errors.email', 'Invalid email given.')
      }


      if(flag == 0){
        let newRecord = this.store.createRecord('application', {
          name: this.get('name'),
          email: this.get('email'),
          age: this.get('age'),
          phone: this.get('phone')
        })

        newRecord.save().then(()=>{
          this.set('applicationsaved', "Application saved")
        })
      }

    },
  }
});
