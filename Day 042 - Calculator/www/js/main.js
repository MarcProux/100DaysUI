function Calculator() {
    that        = this,
    this.rField = "div#result",
    this.oField = "div#operation",
    this.button = ".keyboard a",
    this.init   = false,

    this.run = function() {
        $(this.button).click(function() {
            var value = $(this).html();

            if (!that.init) {
                $(that.oField).text("");
                that.init = true;
            }

            if (value != "=" && value != "+/-")
                $(that.oField).text($(that.oField).text() + value);

            that.dispatcher(value);
        })
    },

    this.dispatcher = function(value) {

        if ($(this.oField).html().indexOf("/") != -1)
            this.operation(value, "/");
        if ($(this.oField).html().indexOf("*") != -1)
            this.operation(value, "*");
        if ($(this.oField).html().indexOf("-") != -1)
            this.operation(value, "-");
        if ($(this.oField).html().indexOf("+") != -1)
            this.operation(value, "+");
    },

    this.operation = function(value, symbol) {
        var numbers = $(this.oField).html().split(symbol), result;

        if (symbol == "/")
            result = numbers[0] / numbers[1];
        if (symbol == "*")
            result = numbers[0] * numbers[1];
        if (symbol == "-")
            result = numbers[0] - numbers[1];
        if (symbol == "+")
            result = parseFloat(numbers[0]) + parseFloat(numbers[1]);

        result = Math.round((result) * 100) / 100;
        console.log(result);
        if (numbers.length > 1) {
            if (value == "=" || numbers.length > 2)
                $(this.rField).text(result);
        }
    };

}
