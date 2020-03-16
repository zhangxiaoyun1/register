/*global $ :true */
$(
    function(){
        var a=false,
            b=false,
            c=false,
            d=false;
        var timer;
        var i=60;
        var $name=$('#name'),
            $names=$('#names'),
            $phone=$('#phone'),
            $phones=$('#phones'),
            $pwd=$('#pwd'),
            $pwds=$('#pwds'),
            $send=$('#send'),
            $sends=$('#sends'),
            $get=$('#get'),
            $put=$('#put');
        $name.focus(function(){
            $names.text('用户名仅支持中英文、数字和下划线，且不能为纯数字。');
        })
        $name.blur(function(){
            var n=$name.val();
            if(n==''){
                $names.text('用户名不能为空。');
            }else{
                if((!/^[_0-9a-zA-Z]{3,}$/.test(n))||/^[0-9]{1,20}$/.test(n)){
                    $names.text('用户名仅支持中英文、数字和下划线，且不能为纯数字。');
                }else{
                    $names.text('');
                    a=true;
                }
            }
        })
        $phone.blur(function(){
            var p=$phone.val();
            if(p==''){
                $phones.text('手机号不能为空。')
            }else{
                if(!(/^1[3456789]\d{9}$/.test(p))){
                    $phones.text('手机号码格式不正确。')
                }else{
                    $phones.text('');
                    b=true;
                }
            }
        })
        $pwd.focus(function(){
            $pwds.text('长度为8~12个字符，字母/数字及其符号至少包含两种，不能是中文。');
        })
        $pwd.blur(function(){
            var p=$pwd.val();
            if(p==''){
                $pwds.text('密码不能为空。');
            }else{
                if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,12}$/.test(p))){
                    $pwds.text('长度为8~12个字符，字母/数字及其符号至少包含两种，不能是中文。');
                }else{
                    $pwds.text('');
                    c=true;
                }

            }
            
        })
        $send.click(function(){
            if(a==true&&b==true&&c==true){
                $send.attr('disabled','true');
                timer=setInterval(function(){
                    i--;
                    if(i==0){
                        clearInterval(timer);
                        $send.text('获取验证码');
                        $sends.text('请求超时请稍后再试。');
                        $send.removeAttr('disabled');
                        i=60;
                    }else{
                        $send.text('重新获取('+i+'s)');
                        $sends.text('验证码已发送，请及时查收');
                        if($get.val()){
                            d=true;
                            $put.removeAttr('disabled');
                        }
                    }
                },1000)
            }else{
                alert('验证码发送失败。');
            }
        })
        $put.click(function(){
            if(a==true&&b==true&&c==true&&d==true){
                alert('提交成功。');
                $send.text('获取验证码');
                clearInterval(timer);
                $send.removeAttr('disabled');
                i=60;
            }else{
                alert('提交失败。');
            }
            
        })
            
    }
);