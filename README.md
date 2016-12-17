# autoFill.js
a javascript dev utility to auto fill form fields when doing manual tests, to avoid the tedious task of typing everything in. 

##Usage
Add the script to your page (no dependencies, Bootstrap and jQuery are only included for the layout of the sample page) 
```html
<script src="Scripts/autoFill.js"></script>
```

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
## All data types 
```js
 fieldTypes:
            {
                firstName: "firstName",
                lastName: "lastName",
                fullName: "fullName",
                street: "street",
                city: "city",
                state: "state",
                zip: "zip",
                creditCard: "creditCard",
                phone: "phone",
                email: "email",
                radioButton: "radioButton",
                checkBox: "checkBox",
                date: "date",
                money: "money",
                wholeNumber: "wholeNumber",
                decimal: "decimal",
                text: "text"
            }
```

##All config options 

```js
config:
            {
                "maxNumberSize": 100,
                "maxDecimalSize": 100,
                "decimalPrecision": 2,
                "dateFormat": "toLocaleDateString", /*toLocaleDateString, toDateString, GMT, mm/dd/yyyy */
                "startDate": new Date(1975, 0, 1),
                "endDate": new Date()
            }
```


