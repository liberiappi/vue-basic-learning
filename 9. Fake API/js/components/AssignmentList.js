import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
  components: { Assignment, AssignmentTag },

  template: `
    <section v-show="assignments.length" class="w-72 bg-gray-700 p-4 border border-color-gray-600 rounded">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ filteredAssignments.length }})</span>
            </h2>

            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>

        <div class="flex gap-2">
            <button
                @click="currentTag = tag"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border border-blue-500 text-blue-500' : tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>

        <assignment-tag
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
        ></assignment-tag>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            ></assignment>
        </ul>

        <slot></slot>
    </section>
  `,

  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
