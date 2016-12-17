/// <reference path="jquery-1.9.1.js" />
/* autoFill.js  https://github.com/KRob314/autoFill.js */


var autoFill =
    {
        config:
            {
                "maxNumberSize": 100,
                "maxDecimalSize": 100,
                "decimalPrecision": 2,
                "dateFormat": "toLocaleDateString", /*toLocaleDateString, toDateString, GMT, mm/dd/yyyy */
                "startDate": new Date(1975, 0, 1),
                "endDate": new Date()
            },

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
            },

        init: function (config)
        {
            if (config && typeof (config) == 'object')
                $.extend(autoFill.config, config);
        },

        SetFields: function (fieldsAndTypeDict)
        {
            for (key in fieldsAndTypeDict)
            {
                var value = fieldsAndTypeDict[key];
                var autoValue = this.getFieldData(value);

                if (value === "radioButton" || value === "checkBox")
                {
                    var optionCount = document.getElementsByName(key).length - 1;
                    var selectedIndex = autoFill.getRandomInt(0, optionCount);

                    document.getElementsByName(key)[selectedIndex].checked = true;
                }

                if (document.getElementById(key))
                    document.getElementById(key).value = autoValue;
                else if (document.getElementsByName(key))
                    document.getElementsByName(key).value = autoValue;
            }
        },

        getFieldData: function (fieldType)
        {
            var result;
            var randomIndex = 0;
            var data = [];

            switch (fieldType)
            {
                case this.fieldTypes.firstName:
                    data = ["Lex", "Andrea", "Carroll", "Gwendolyn", "Timothy", "Mary", "Devin", "Beth", "Mike"];
                    break;
                case this.fieldTypes.lastName:
                    data = ["Munoz", "Stephens", "Barton", "Valdez", "Chambers", "Graves", "Shermen", "Fleming", "Lang"];
                    break;
                case this.fieldTypes.street:
                    data = ["16 NW. Squaw Creek Ave.", "9655 Rosewood Street", "35 Linda Drive", "9 North Rose Street", "177 Chapel Street", "30 North Cedar Swamp Ave.", "212 W. Pineknoll Road", "75 Logan Lane", "9693 Poplar St.", "117 Mulberry Drive", "65 S. Dogwood Drive", "7 West Trout Street"];
                    break;
                case this.fieldTypes.city:
                    data = ["Pembroke Pines", "Taylor", "Brownsburg", "Vienna", "Oklahoma City", "Mundelein", "Chapel Hill", "Centereach", "Hephzibah", "Battle Ground", "Jamacia", "Parkersburg"];
                    break;
                case this.fieldTypes.state:
                    data = ["FL", "MI", "IN", "VA", "OK", "IL", "NC", "NY", "GA", "WA", "NY", "WV"];
                    break;
                case this.fieldTypes.zip:
                    data = ["33028", "48180", "46112", "22180", "73112", "600060", "27516", "11720", "30815", "98604", "11432", "26101"];
                    break;
                case this.fieldTypes.creditCard:
                    data = ["378282246310005", "371449635398431", "378734493671000", "30569309025904", "38520000023237", "6011000990139424", "6011111111111117", "3566002020360505", "5105105105105100", "4222222222222", "76009244561", "5019717010103742"];
                    break;
                case this.fieldTypes.email:
                    data = ["fake@email.com", "fake1@email.com", "fake2@email.com", "fake3@email.com", "fake4@email.com", "fake5@email.com", "fake6@email.com", "fake7@email.com", "fake8@email.com", "fake9@email.com", "fake10@email.com", "fake11@email.com"];
                    break;
                case this.fieldTypes.phone:
                    data = ["202-555-0133", "202-555-0184", "202-555-0124", "202-555-0110", "202-555-0161", "202-555-0191", "+1-202-555-0133", "+1-202-555-0184", "+1-202-555-0124", "314.651.9015", "(815) 405-2147", "636 451 2894"];
                    break;
                case this.fieldTypes.money: 
                    data = ["$151.14", "$12.00", "$21", "$64.54", "$1,457.87", "$201.54", "$100.31", "$5.64", "$44.14", "$947.31", ]
                    break;
                case this.fieldTypes.wholeNumber:
                    return this.getRandomInt(0, this.config.maxNumberSize - 1);
                    break;
                case this.fieldTypes.decimal:
                    var randomNum = this.getRandomInt(0, this.config.maxDecimalSize - 1) + ".";

                    for (var i = 1; i <= this.config.decimalPrecision; i++)
                        randomNum += this.getRandomInt(0, 9);

                    return randomNum;
                    break;
                case this.fieldTypes.date:
                    return this.getRandomDate(this.config.startDate, this.config.endDate);
                    break;
                case this.fieldTypes.text:
                    data = [
                        "Two bytes meet. The first byte asks, 'Are you ill?' The second byte replies, 'No, just feeling a bit off.' ",
                        "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
                        "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
                        "There are three kinds of lies: Lies, damned lies, and benchmarks.",
                        "All programmers are playwrights, and all computers are lousy actors.",
                        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
                        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
                    ];
                    break;
            }

            randomIndex = this.getRandomInt(0, data.length - 1);
            result = data[randomIndex];

            return result;
        },


        getRandomInt: function (min, max)
        {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        getRandomDate: function (start, end)
        {
            var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

            if (this.config.dateFormat.toUpperCase() === "TOLOCALEDATESTRING")
                return randomDate.toLocaleString();
            else if (this.config.dateFormat.toUpperCase() === "TODATESTRING")
                return randomDate.toDateString()
            else if(this.config.dateFormat.toUpperCase() === "GMT")
                return randomDate.toGMTString();
            else if(this.config.dateFormat === "mm/dd/yyyy")
                return randomDate.getMonth() + "/" + randomDate.getDate() + "/" + randomDate.getFullYear();
            else
                return randomDate;

        }

    };