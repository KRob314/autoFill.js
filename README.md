# autoFill.js
dev utility to auto fill form fields when doing manual tests, to avoid the tedious task of typing everything in. 

##Usage
Create an object literal (dictionary) referencing the fields that you want to auto populate. The keys should be the name or ID of the element, and the values should be the `autofill.FieldTypes` that represents what kind of data that element should receive. 

```js
var fieldsAndTypes = {
            "txtFirstName": autoFill.fieldTypes.firstName,
            "gender": autoFill.fieldTypes.radioButton,
            "ddState": autoFill.fieldTypes.state,
            "txtEmail": autoFill.fieldTypes.email,
            "txtMoney": autoFill.fieldTypes.money,
            "txtDate": autoFill.fieldTypes.date,
            "txtDecimal": autoFill.fieldTypes.decimal,
            "age": autoFill.fieldTypes.checkBox
        };
```
Initialize `autofill` and pass in configuration changes to change the format of the output for a given type. 

```js
 autoFill.init({"decimalPrecision": 3, "dateFormat": "mm/dd/yyyy", "startDate": new Date(2013, 0, 1) });
 ```
Have the fields auto populate by calling `autoFill.SetFields()` and pass in your dictionary of elements and data types. 

```js
autoFill.SetFields(fieldsAndTypes)
```



