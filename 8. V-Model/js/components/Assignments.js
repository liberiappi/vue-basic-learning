import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="space-y-4">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <assignment-create @add="add"></assignment-create>
    </section>
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: "Finished projects", complete: false, tag: "math" },
        { id: 2, name: "Read chapter 4", complete: false, tag: "science" },
        { id: 3, name: "Turn in homework", complete: false, tag: "math" },
      ],
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
    add(name) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: name,
        complete: false,
      });
    },
  },
};
