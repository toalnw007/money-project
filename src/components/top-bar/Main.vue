<template>
    <div class="top-bar">
        <nav aria-label="breadcrumb" class="-intro-x hidden xl:flex">
            <ol class="breadcrumb text-white">
                <li class="breadcrumb-item"><a href="#">App</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
                <li class="breadcrumb-item"><a href="#">Administrator</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</li>
                <li class="breadcrumb-item active text-slate-400" aria-current="page">Dashboard</li>
            </ol>
        </nav>   

        <div class="intro-x relative ml-auto sm:mx-auto">
            <div class="search hidden sm:block">
                <input
                    type="text"
                    class="search__input form-control"
                    placeholder="Quick Search... (Ctrl+k)"
                />
                <iconf icon="fa-solid fa-search" class="search__icon text-white"/>
            </div>
            <a class="notification sm:hidden" href="">
                <SearchIcon class="notification__icon dark:text-slate-500 mr-5" />
            </a>
        </div>
        
        <div class="intro-x mr-auto sm:mr-6">
            <div class="dropdown-toggle notification notification--bullet cursor-pointer">
                 <iconf icon="fa-solid fa-bell" class="notification__icon text-white"/>
            </div>
        </div>


        <div class="intro-x mr-auto sm:mr-6">
            <div class="notification cursor-pointer">
                <iconf icon="fa-solid fa-inbox" class="notification__icon text-white"/>
            </div>
        </div>

        <div class="w-10 h-10 image-fit">
          <img
            alt="Rocketman - HTML Admin Template"
            class="rounded-full border-2 border-white border-opacity-10 shadow-lg"
            src="@/assets/images/test-user.png"
          />
        </div>
            <div class="hidden md:block ml-3">
                <div class="max-w-[7rem] truncate font-medium text-white">
                        Denzel Washington
                </div>
            <div class="text-xs text-slate-400">Software Engineer</div>
        </div>
        
        


        

    </div>
</template>

<script setup>

</script>

