<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestPage.aspx.cs" Inherits="autoFill.TestPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Auto Fill</title>
    <style type="text/css">
        div.row { margin-top: 15px; }
    </style>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">

            <div class="row" style="margin-top: 5%;">
                <div class="col-md-4">
                    <span class="help-block">First Name</span>
                    <input id="txtFirstName" name="firstName" class="form-control" />
                </div>
                <div class="col-md-4">
                    <span class="help-block">Last Name</span>
                    <input id="txtLastName" name="lastName" class="form-control" />
                </div>
                <div class="col-md-4">
                    <span class="help-block">Gender</span>
                    <input type="radio" name="gender" value="male" />
                    Male
                    <input type="radio" name="gender" value="female" />
                    Female
                    <input type="radio" name="gender" value="other" />
                    Other"
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <span class="help-block">Street</span>
                    <input id="txtStreet" name="street" class="form-control" />
                </div>
                <div class="col-md-4">
                    <span class="help-block">City</span>
                    <input id="txtCity" name="city" class="form-control" />
                </div>
                <div class="col-md-2">
                    <span class="help-block">State</span>
                    <select id="ddState" name="state" class="form-control">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <span class="help-block">Zip</span>
                    <input id="txtZip" name="zip" class="form-control" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <span class="help-block">Credit Card</span>
                    <input id="txtCreditCard" name="creditcard" class="form-control" />
                </div>
                <div class="col-md-4">
                    <span class="help-block">Email</span>
                    <input id="txtEmail" name="email" class="form-control" />
                </div>
                <div class="col-md-4">
                    <span class="help-block">Phone</span>
                    <input id="txtPhone" name="phone" class="form-control" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <span class="help-block">Money</span>
                    <input id="txtMoney" name="money" class="form-control" />
                </div>
                <div class="col-md-3">
                    <span class="help-block">Number</span>
                    <input id="txtNumber" name="number" class="form-control" />
                </div>
                <div class="col-md-3">
                    <span class="help-block">Date</span>
                    <input id="txtDate" name="date" class="form-control" />
                </div>
                <div class="col-md-3">
                    <span class="help-block">Decimal</span>
                    <input id="txtDecimal" name="decimal" class="form-control" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <span class="help-block">Age</span>
                    <input type="checkbox" name="age" value="18-25" />
                    18-25
                    <input type="checkbox" name="age" value="26-35" />
                    26-35
                    <input type="checkbox" name="age" value="36-45" />
                    36-45
                    <input type="checkbox" name="age" value="46+" />
                    46+
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <textarea id="txtText" name="text" class="form-control"></textarea>
                </div>
            </div>

            <br />
            <input type="button" id="btnSubmit" value="Get Data" class="btn btn-primary" />
        </div>
    </form>

    <script src="Scripts/jquery-1.9.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/autoFill.js"></script>

    <script type="text/javascript">

        var fieldsAndTypes = {
            "txtFirstName": autoFill.fieldTypes.firstName,
            "txtLastName": autoFill.fieldTypes.lastName,
            "gender": autoFill.fieldTypes.radioButton,
            "txtStreet": autoFill.fieldTypes.street,
            "txtCity": autoFill.fieldTypes.city,
            "ddState": autoFill.fieldTypes.state,
            "txtZip": autoFill.fieldTypes.zip,
            "txtCreditCard": autoFill.fieldTypes.creditCard,
            "txtEmail": autoFill.fieldTypes.email,
            "txtPhone": autoFill.fieldTypes.phone,
            "txtMoney": autoFill.fieldTypes.money,
            "txtNumber": autoFill.fieldTypes.wholeNumber,
            "txtDate": autoFill.fieldTypes.date,
            "txtText": autoFill.fieldTypes.text,
            "txtDecimal": autoFill.fieldTypes.decimal,
            "age": autoFill.fieldTypes.checkBox
        };

        $("#btnSubmit").click(function ()
        {
            autoFill.init({ "decimalPrecision": 3, "dateFormat": "mm/dd/yyyy", "startDate": new Date(2013, 0, 1) });
            autoFill.SetFields(fieldsAndTypes);
        });

    </script>
</body>
</html>
