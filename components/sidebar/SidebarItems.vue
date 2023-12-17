<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";
</script>

<template>
  <ul>
    <SidebarItem title="Dashboard" to="/" icon="fas fa-home">
    </SidebarItem>

    <SidebarItem title="Company" to="/company" icon="fal fa-building">
    </SidebarItem>
    
    <SidebarItem title="Roles" to="/roles" icon="far fa-tasks">
    </SidebarItem>

    <SidebarItem title="Employe" to="/employe" icon="fas fa-user-friends">
    </SidebarItem>

    <SidebarItem title="Time Manage" to="/manage" icon="fas fa-calendar-alt">
    </SidebarItem>

    <SidebarItem title="Reports" to="/report" icon="fad fa-file-chart-line">
    </SidebarItem>

    <SidebarItem title="Settings" to="/setting" icon="fas fa-cogs">
    </SidebarItem>

    <!-- <div class="lg:bottom-0 lg:absolute relative"> -->
      <SidebarItem title="logout" to="/login" icon="fas fa-arrow-from-right">
      </SidebarItem>
    <!-- </div> -->

  </ul>
</template>
