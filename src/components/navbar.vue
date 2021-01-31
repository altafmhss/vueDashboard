<template>
    <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a href="/" class="navbar-brand">
            <img src="/examples/images/logo.svg" height="28" alt="CoolBrand">
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
                <a  href="/" class="nav-item nav-link">Home</a>
           <a class="nav-item nav-link"  href="/zos" :class="{active: $route.name==='zos'}">z/OS</a>
                <a   href="/bff" :class="{active: $route.name==='bff'}" class="nav-item nav-link">BFF</a>
                  <a   href="/frontend" :class="{active: $route.name==='frontend'}" class="nav-item nav-link">Frontend</a>
                <a   href="/azure" :class="{active: $route.name==='azure'}" class="nav-item nav-link">Azure</a>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
export default {
    
}
</script>