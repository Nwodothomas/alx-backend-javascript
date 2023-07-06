namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher() {
      if (this._teacher && this._teacher.experienceTeachingJava) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
