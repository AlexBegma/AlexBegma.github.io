$(window).load(function(){
    $('#appointmentForm .preferredDateInput').datepicker({
        format: "DD, dd MM yyyy",
        todayBtn: true,
        clearBtn: true
    });
    $('#appointmentForm .selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
    });
});

$(document).ready(function(){
    
    (function($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value);
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function() {
            $('#appointmentForm').validate({
                rules: {
                    preferedDate: {
                        required: true
                    },
                    preferedTimeRange: {
                        required: true
                    },
                    stayOrNot: {
                        required: true
                    },
                    serviceSelect: {
                        required: true
                    },
                    fullName: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    c_email: {
                        required: true,
                        email: true
                    },
                    phoneNumber: {
                        required: true
                    },
                    preferredContactMethod: {
                        required: true
                    },
                    vehicleMake: {
                        required: true
                    },
                    vehicleModel: {
                        required: true
                    },
                    vehicleYear: {
                        required: true
                    },
                    fuelType: {
                        required: true
                    }
                },
                messages: {
                    preferedDate: {
                        required: "you should select a date"
                    },
                    preferedTimeRange: {
                        required: "you should select a time"
                    },
                    stayOrNot: {
                        required: "you should select a option"
                    },
                    serviceSelect: {
                        required: "you dont need any service, really !!!"
                    },
                    fullName: {
                        required: "come on, you have a name don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    email: {
                        required: "no email, no appointment"
                    },
                    c_email: {
                        required: "no email, no appointment"
                    },
                    phoneNumber: {
                        required: "no phone number, no appointment"
                    },
                    preferredContactMethod: {
                        required: "you should select a option"
                    },
                    vehicleMake: {
                        required: "you vehicle made sometime, right !!!"
                    },
                    vehicleModel: {
                        required: "you vehicle have a model, right !!"
                    },
                    vehicleYear: {
                        required: "you vehicle made sometime, right !!!"
                    },
                    fuelType: {
                        required: "you should select a option"
                    }
                },
                submitHandler: function(form) {
                    $(form).ajaxSubmit({
                        type:"POST",
                        data: $(form).serialize(),
                        url:"appointment_process.php",
                        success: function() {
                            $('#appointmentForm :input').attr('disabled', 'disabled');
                            $('#appointmentForm').fadeTo( "slow", 0.15, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor','default');
                                $('#success').fadeIn();
                            });
                        },
                        error: function() {
                            $('#appointmentForm').fadeTo( "slow", 0.15, function() {
                                $('#error').fadeIn();
                            });
                        }
                    });
                }
            });
        });
        
    })(jQuery)
});