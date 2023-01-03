import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-4">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    </section>
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: "Finished projects", complete: false },
        { id: 2, name: "Read chapter 4", complete: false },
        { id: 3, name: "Turn in homework", complete: false },
      ],

      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  methods: {
    add() {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: this.newAssignment,
        complete: false,
      });

      this.newAssignment = "";
    },
  },
};
