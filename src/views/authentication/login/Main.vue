<template lang="en" >
    <div class="background-cover"></div>
    <div class="container">
        <div class="w-full min-h-screen p-5 md:p-20 flex items-center justify-center ">
            <div class="w-96 intro-y">

                <img 
                class="mx-auto w-16"
                src="@/assets/images/authentication/logo.svg"
                />

                <div class="text-white text-center text-2xl mt-14">
                    Login to Your Account!
                </div>

               <div class="bg-white rounded px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 ">

                    <div class="form-group">
                        <input
                            type="text"
                            class="form-control py-3 px-4 block w-full"
                            placeholder="Email"
                            v-model="form.email"
                        />
                        <p v-if="!emailIsValid" class="error-message">The email field is required</p>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-control py-3 px-4 block mt-4 w-full"
                            placeholder="Password"
                            v-model="form.password"
                        />
                        <p v-if="!passwordIsValid" class="error-message">The password field is required</p>
                    </div>
                    <div class="flex text-xs mt-4">
                        <div class="flex items-center mr-auto">
                            <input
                                type="checkbox"
                                class="border mr-2"
                            />
                            <label class="cursor-pointer select-none" for="remember-me"
                            >Remember me</label>
                        </div>
                        <a href="">Forgot Password?</a>
                    </div>
                    <div class="mt-5 xl:mt-8 text-center xl:text-left">   
                        <button class="btn btn-blue w-full" @click="submitForm">Login</button>
                        <button class="btn btn-gray w-full mt-3">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            form : {
                email: null ,
                password: null
            } ,
            emailIsValid : true ,
            passwordIsValid : true ,
        }
    },
    methods: {
        submitForm(){

            const emailIsValid = this.validEmail(this.form.email)
            const password = !!this.form.password
            const formIsValid = emailIsValid && password

            if(formIsValid){
                this.emailIsValid = true;
                this.passwordIsValid = true;
                console.log('Form sumitted',this.form)
            }else{
                this.emailIsValid = emailIsValid
                this.passwordIsValid = password
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        
    },
    
}
</script>
