console.log('jQuery!');
    /*function hello (argument) {
        $('input[type="radio"]').each(function() {
          alert('hello');
        });
    };*/
    var prizeString = "";
    $('input[type="radio"]').each(function() {

        prizeString = "";

        if ($(this).val() != 0) {
            prizeString = $(this).val();

            $(this).next('span').prepend("$" + prizeString + " US - ");
        }


    });


    var last_Id;
    var last_Name;
    var now_Id;
    var now_Name;
    var data_child;

    

    $('input[type="radio"], select option').click(function() {
        var result = $('input[type=radio]:checked, select option:selected');
        if (result.length > 0) {
            var radioCheckedNumber = result.length + " items in cart<br>";
            var resultString = "";
            var total = 0;
            var noneNumber = 0;
            var villageSum = 0;
            var thirdSum = 0;
            var imageUrl = "";
            var findImg = $(this).closest('.col-sm-10').prev('.col-sm-2').find('img');

            result.each(function() {
                
                imageUrl = "";
                //alert($(this).val());
                total += parseInt($(this).val());
                if(!$(this).hasClass('None')){
                imageUrl = $(this).attr('imgAttr');
                findImg.attr('src', imageUrl);
                }else {
                    var originalImg = findImg.attr('originalUrl');
                    findImg.attr('src',originalImg)
                }
                var selectedText = $(this).next('span').text();
                
                data_child = $(this).data('child');

                //console.log(data_child);

                angular.forEach(data_child,function (value, index) {
                    $(value).find('input[type=radio]').prop( "disabled", true );
                });

                //$("#section-3-Button-0").find('input[type=radio]').prop( "disabled", true );

                var Case = "";



                /*$('input[class=case]:checked').each(function() {
                    Case = $(this).attr('case');
                    //alert(Case);

                    $('input[class=cover]:checked').each(function() {

                        if (Case == "2L") {
                            var aimageUrl = $(this).attr('aimgAttr');
                            //alert(aimageUrl);
                            findImg.attr('src', aimageUrl);
                        } else if (Case == "4L") {
                            var bimageUrl = $(this).attr('bimgAttr');
                            //alert(bimageUrl);
                            findImg.attr('src', bimageUrl);
                        } else if (Case == "6L") {
                            var cimageUrl = $(this).attr('cimgAttr');
                            //alert(cimageUrl);
                            findImg.attr('src', cimageUrl);
                        }

                    });
                });*/

                if ($(this).val() != 0) {
                    resultString += selectedText + "<br/>";
                    findImg.removeClass('shade');
                } else if ($(this).val() == 0 && $(this).hasClass('cover')) {
                    noneNumber += 0;
                    findImg.removeClass('shade');
                } else if($(this).val() == 0 && $(this).hasClass('None')){
                    noneNumber += 0;
                } else {
                    noneNumber += 1;
                    radioCheckedNumber = result.length - noneNumber + " items in cart";
                    findImg.addClass('shade');
                    //$('#state').text(noneNumber);
                }

                


            });



            $('.village input[type=radio]:checked').each(function() {
                villageSum += parseInt($(this).val());
                $('#villageSum').text('$' + villageSum + ' US');
            });

            $('#third input[type=radio]:checked').each(function() {
                thirdSum += parseInt($(this).val());
                $('#thirdSum').text('$' + thirdSum + ' US');

            });

            if (resultString.length > 0) {
                resultString += "<hr>";
            }

            $('#resultstring').html(resultString);
            $('#radiocheckednumber').html(radioCheckedNumber);
            $('#total').html('$' + total);
        } else {
            $('#divResult').html("No radio button is checked");
        }
    });

/*$('input[type="radio"], select option').click(function() {
    now_Id = $(this).closest('div').attr('id');
    now_Name = $(this).attr('name');

    if(now_Id != last_Id && now_Name == last_Name) {
        alert('congruate');
        var test2 = '#' + last_Id;
        console.log(test2);
        var test = $(test2).find('input[type=radio]').data('child');
        console.log(test);
        angular.forEach(test,function (value, index) {
            $(value).find('input[type=radio]').prop( "disabled", false );
        });
    }

    last_Id = $(this).closest('div').attr('id');
    last_Name = $(this).attr('name');
});*/

$('input[type="radio"], select option').click(function() {

    $('input[type=radio]').each(function(){
        if($(this).is(':checked')){
            
        } else {
            var test = $(this).data('child');
            angular.forEach(test,function (value, index) {
                $(value).find('input[type=radio]').prop( "disabled", false );
            });
            //$(test).find('input[type=radio]').prop( "disabled", false );
        }
    });
});

    //-----------------------------------------------------
    //Read More
    //-----------------------------------------------------

    /*$('.read-more-target1').hide();
    $('.read-more-target2').hide();
    var readMoreState1 = false;
    var readMoreState2 = false;

    $('.read-more1').click(function(){
        $(this).next().next().slideToggle(0);
        readMoreState1 = !readMoreState1;

        if(readMoreState1 == true) {
            $(this).find('i').addClass('fa-rotate-90');
        } else {
            $(this).find('i').removeClass('fa-rotate-90');
        }
    });


    $('.read-more2').click(function(){
        $(this).next().next().slideToggle();
        readMoreState2 = !readMoreState2;

        if(readMoreState2 == true) {
            $(this).find('i').addClass('fa-rotate-90');
        } else {
            $(this).find('i').removeClass('fa-rotate-90');
        }
    });*/

    $('.readmore_area').hide();
    $('.readmore_area.show-first').show();
    $('.sub-sectionToggle').next().hide();

    $('.readmore_button').click(function() { //when I click a toggle button
        var parent = $(this).parent(".readmore_group");
        var buttons = $(parent).children('.readmore_button');
        var areas = $(parent).children('.readmore_area');
        var idx = $(buttons).index(this);

        if ($(this).hasClass("open")) {
            $(this).removeClass("open").addClass("closed");
            $(areas[idx]).removeClass("open").addClass("closed");
            $(this).find('i').removeClass('fa-rotate-90');
        } else {
            $(this).find('i').addClass('fa-rotate-90');
            $(this).addClass("open").removeClass("closed");
            $(areas[idx]).addClass("open").removeClass("closed");
        }
        $(parent).children('.readmore_area.closed').hide();
        $(parent).children('.readmore_area.open').slideDown();

    });

    $('.radio-tables').find('.tableSection.closed').hide();

    $('.table-tab li a').click(function() {
        var parent = $(this).closest('.radio-tables');
        var buttons = $(parent).children('.table-tab').find('a');
        var areas = $(parent).children('.tableSection');
        var idx = $(buttons).index(this);

        if (!$(this).hasClass("active")) {
            $(buttons).parent().removeClass("active");
            $(this).parent().addClass('active');
            $(areas).removeClass("open").addClass("closed");
            $(areas[idx]).addClass("open").removeClass("closed");
        }
        $(parent).children('.tableSection.closed').hide();
        $(parent).children('.tableSection.open').show();
    });

    $('.sub-sectionToggle').click(function() {
        $(this).next().slideToggle();
        if (!$(this).find('i').hasClass('fa-rotate-90')) {
            $(this).find('i').addClass('fa-rotate-90');
        } else {
            $(this).find('i').removeClass('fa-rotate-90');
        }
    });




    //------------------------------------------------------
    //Acodrian
    //------------------------------------------------------


    $('.con-fig-header').next('.panel-body').hide();


    $('.con-fig-header').click(function() {
        $(this).next(".panel-body").slideToggle();

        if (!$(this).find("i").hasClass("fa-rotate-90")) {
            $(this).find("i").addClass("fa-rotate-90");
        } else {
            $(this).find("i").removeClass("fa-rotate-90");
        }
    });

    $(".AMD-show, .intel-show").hide();

    $("#intel").click(function() {
        $(".show-text").hide();
        $(".AMD-show").hide();

        $(".intel-show").slideDown();
    });

    $("#AMD").click(function() {
        $(".show-text").hide();
        $(".AMD-show").slideDown();

        $(".intel-show").hide();
    });

     var children = $('.GalleryThumbNail > .thumb');
     for(var i = 0, l = children.length; i < l; i += 4) {
         children.slice(i, i+4).wrapAll('<div class="item"></div>');
     }

     $('.GallerySlideshow > .item:nth-child(1)').addClass('active');
     $('.GalleryThumbNail > .item:nth-child(1)').addClass('active');

     //$('.hide-section').closest('.panel-default').hide();