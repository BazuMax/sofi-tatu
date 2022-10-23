<template>
  <q-page>
    <div class="p-4">
      <div class="text-3xl font-bold pb-4">
        Наши работы
      </div>
      <div class="project-widget-list space-y-5">
        <ProjectWidget />
      </div>
    </div>
  </q-page>
</template>

<script>
import ProjectWidget from "components/ProjectWidget";
export default {
  components: {ProjectWidget}

  // name: 'PageName',
}
</script>
