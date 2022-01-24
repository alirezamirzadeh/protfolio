<div>
    <input type="text" placeholder="جستجو مقاله">
<img src="/images/search.svg" alt="">

</div>
<style>
    div {
        position: relative;
        width: 100%;
    }
    input {
        margin: 1.5rem 0 3rem 0;
        width: 96%;
        height: 2.5rem;
        border-radius: .5rem;
        font-family: inherit;
        padding-right: 1rem;
        border: 0;
        outline: none;
        font-size: .95rem;
        border: 3px solid rgba(0, 0, 0, 0.05);
        color: inherit;
    }

    input:focus{
        border:3px solid #000;

    }

    :global(body.dark-mode) input:focus {
        border:3px solid #fff;
    }


    :global(body.dark-mode) input {
        background-color: rgba(255, 255, 255, .05);
    }

    img {
        position: absolute;
        top: 2.3rem;
        left: 1rem;
        filter: invert(78%) sepia(38%) saturate(85%) hue-rotate(06deg) brightness(83%) contrast(100%);

    }
</style>