<template>
    <div id="myaccdiv">
        <img src="../assets/background50.jpg" alt="">
        <div id="form">
            <table>
                <tr>
                    <td>Name:</td>
                    <td>{{myuser.firstname}}</td>
                </tr>
                <tr>
                    <td>Secondname:</td>
                    <td>{{myuser.lastname}}</td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>{{myuser.username}}</td>
                </tr>
                <tr>
                    <td>Mail:</td>
                    <td>{{myuser.mail}}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{{myuser.phone}}</td>
                </tr>
                <tr>
                    <td>Type:</td>
                    <td>{{myuser.type}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
    #myaccdiv{
        position: relative;
    }
    img{
        width: 100%;
        height: 100%;
    }
    #form{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<script>
    import allUsers from '../data/users.js'
    export default{
        name: 'MyAccount',
        data(){
            return{
                myuser:''
            }
        },
        created(){
            if(localStorage.getItem('allUsers')==null){
                localStorage.setItem('allUsers', JSON.stringify(allUsers))
            }
            this.myuser=allUsers['test']
        }
    }
</script>