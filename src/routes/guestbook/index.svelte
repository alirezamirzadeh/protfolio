<script>

import {auth,signIn} from '../../stores/auth';
import { messages,addMessage } from '../../stores/guestbookStore.js';
let value = '';

function handleAddMessage() {
    addMessage(value,$auth.email)
    value = ''
}
$: $auth
</script>

<main>
    <p class="title">
        دفترچه مهمان
    </p>
    <p class="body">
            اگه دوست داری یک پیام بنویس, می تواند هرچیزی باشد(درخواست,اطلاعات,قدردانی یا یک جک و...) 
            زمان  شگفت زده کردن و غافلگیری منه 
    </p>
    <div class="box__send">
        <p class="title">وقت نوشتنه :))</p>
        <p class="body">
            برای بازدیدکنندگان آینده سایت من پیامی به اشتراک بگذارید.

        </p>
        {#if $auth}
        <div class="box__input">
            <input bind:value class="box__sub" placeholder="پیام شما ..." required>
            <button on:click={handleAddMessage(value,$auth.email)} class="btn-send">فرستادن</button>
        </div>

        {:else}
        <div class="box__input">

        <button class="btn-login" on:click={signIn}>عضویت</button>
        </div>
        {/if}
        <p class="information">اطلاعات شما فقط برای نمایش نام شما استفاده می شود</p>
    </div>

    <section>
       {#if $messages !== null}
            {#each $messages as mess}
            
                <div class="message">
                    <p class="text">{mess.message}</p>
                    <div class="box__inf">
                        <span class="name">{$auth?.user_metadata.user_name}</span> <span class="fun">|</span>
                        <span class="date">{mess.created_at.split(":")[0].split("-")[0]} / {mess.created_at.split(":")[0].split("-")[1]} / {mess.created_at.split(":")[0].split("-")[2].split('T')[0]}</span>
                    </div>
                </div>
             {/each}
       {/if}

    </section>
    
</main>





<style>
    main {
        margin-top: 3rem;
    }
    .box__send {
        background-color: rgb(239 246 255);
        padding: 1rem 2rem;
        border-radius: .25rem;
        margin-top: 2.5rem;
        box-shadow: 0 .125rem .5rem rgba(0, 0, 0, 0.05);
        border: 2px solid rgba(0, 0, 0, .1);
        
    }
    :global(body.dark-mode) .box__send {
        background-color: rgb(13 42 148/16%);

    }
    .title {
        font-size: 28px;
        font-weight: 600;
        opacity: .95;
        margin: 0;
    }
    .body {
        opacity: .75;
        margin: .5rem 0 0 0;

    }


    :global(body.dark-mode) .box__sub {
        background-color: rgb(34 34 34/1);

    }

    button {
        background-color: rgb(235 235 235/1);
        border-radius: .25rem;
        border: 0;
        color: inherit;
        font-family: inherit;
        height: 80%;
        font-size: 1.125rem;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
    }

    .btn-login {
        width: 150px;

    }

    .btn-send {
        padding-top: .2rem;
        position: absolute;
        top: 4px;
        width: 150px;

        left: .3rem;
    }
    :global(body.dark-mode) button {
        background-color: rgb(51 51 51/1);
    }


    .information {
        opacity: .65;
        margin-top: 1rem;
        font-size: .95rem;
    }
   
    .box__input {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        position: relative;
    }

    input {
        height: 3rem;
        border-radius: .5rem;
        border: 0;
        padding-right: 1rem;
        color: inherit;
        font-family: inherit;
        font-size: .9rem;
    }

    section {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem
    }
    .text {
        font-size: 1.1rem;
        opacity: .9;
        margin: 0;
    }
    .box__inf {
        opacity: .5;
        display: flex;
        gap: 2rem;
        margin-top: .5rem;
        font-size: .95rem;
    }

    .date {
        opacity: .8;
    }

    .fun {
        opacity: .4;
    }

    @media (max-width:500px) {
  

        .btn-send {
            width: 100px;
            font-size: 1rem;
        }
    }

  
</style>