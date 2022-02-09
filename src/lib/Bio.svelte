<script>
    
</script>
<section>
	<div class="box__bio">
		<h1>علیرضا میرزاده</h1>
		<h2>برنامه نویس سمت کاربر و توسعه دهنده وب</h2>
		<p>
من چیزهایی برای وب میسازم. یک فن دنیای اوپن سورس, عاشق یادگیری فناوری های جدید و علاقه زیادی به پرفرمنس وب دارم
		</p>
	</div>
    <img src="/images/profile.jpg" alt="" width="120" height="120">
</section>



<style>
    section {
        margin-top:3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-weight: bold;
        font-size: 40px;
        margin: 0;
        font-weight: 900;
    }

    h2 {
        font-weight: 500;
        font-size: 1.15rem;
        margin: 0;
        margin-bottom: 1rem;
        opacity: .8;
        
    }
    img {
        border-radius: 50%;
    }
    .box__bio {
        width: 70%;
    }
    p {
        color: rgba(130, 130, 130, 1); 

    }

    @media (max-width: 600px) {
        section {
            flex-direction: column-reverse;
            align-items: flex-start;
            width: 100%;
        }
        .box__bio {
            width: 90%;
        }
        h1 {
            font-size: 2rem;
        }
        img {
            margin-bottom: 1.5rem;
            width: 80px;
        }
    }
</style>
