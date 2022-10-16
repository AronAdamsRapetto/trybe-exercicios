export default interface Enrolable {
  enrollment: string,
  generateEnrollment(): string;
}