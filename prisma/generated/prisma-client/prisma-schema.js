module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCourse {
  count: Int!
}

type AggregateGolfer {
  count: Int!
}

type AggregateHole {
  count: Int!
}

type AggregateScorecard {
  count: Int!
}

type AggregateStroke {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Course {
  id: ID!
  courseName: String!
  courseAddress: String!
  coursePhone: String!
  long: Float!
  lat: Float!
  numberOfHoles: Int!
  holes(where: HoleWhereInput, orderBy: HoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hole!]
}

type CourseConnection {
  pageInfo: PageInfo!
  edges: [CourseEdge]!
  aggregate: AggregateCourse!
}

input CourseCreateInput {
  courseName: String!
  courseAddress: String!
  coursePhone: String!
  long: Float!
  lat: Float!
  numberOfHoles: Int!
  holes: HoleCreateManyInput
}

input CourseCreateOneInput {
  create: CourseCreateInput
  connect: CourseWhereUniqueInput
}

type CourseEdge {
  node: Course!
  cursor: String!
}

enum CourseOrderByInput {
  id_ASC
  id_DESC
  courseName_ASC
  courseName_DESC
  courseAddress_ASC
  courseAddress_DESC
  coursePhone_ASC
  coursePhone_DESC
  long_ASC
  long_DESC
  lat_ASC
  lat_DESC
  numberOfHoles_ASC
  numberOfHoles_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CoursePreviousValues {
  id: ID!
  courseName: String!
  courseAddress: String!
  coursePhone: String!
  long: Float!
  lat: Float!
  numberOfHoles: Int!
}

type CourseSubscriptionPayload {
  mutation: MutationType!
  node: Course
  updatedFields: [String!]
  previousValues: CoursePreviousValues
}

input CourseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CourseWhereInput
  AND: [CourseSubscriptionWhereInput!]
  OR: [CourseSubscriptionWhereInput!]
  NOT: [CourseSubscriptionWhereInput!]
}

input CourseUpdateDataInput {
  courseName: String
  courseAddress: String
  coursePhone: String
  long: Float
  lat: Float
  numberOfHoles: Int
  holes: HoleUpdateManyInput
}

input CourseUpdateInput {
  courseName: String
  courseAddress: String
  coursePhone: String
  long: Float
  lat: Float
  numberOfHoles: Int
  holes: HoleUpdateManyInput
}

input CourseUpdateOneRequiredInput {
  create: CourseCreateInput
  update: CourseUpdateDataInput
  upsert: CourseUpsertNestedInput
  connect: CourseWhereUniqueInput
}

input CourseUpsertNestedInput {
  update: CourseUpdateDataInput!
  create: CourseCreateInput!
}

input CourseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  courseName: String
  courseName_not: String
  courseName_in: [String!]
  courseName_not_in: [String!]
  courseName_lt: String
  courseName_lte: String
  courseName_gt: String
  courseName_gte: String
  courseName_contains: String
  courseName_not_contains: String
  courseName_starts_with: String
  courseName_not_starts_with: String
  courseName_ends_with: String
  courseName_not_ends_with: String
  courseAddress: String
  courseAddress_not: String
  courseAddress_in: [String!]
  courseAddress_not_in: [String!]
  courseAddress_lt: String
  courseAddress_lte: String
  courseAddress_gt: String
  courseAddress_gte: String
  courseAddress_contains: String
  courseAddress_not_contains: String
  courseAddress_starts_with: String
  courseAddress_not_starts_with: String
  courseAddress_ends_with: String
  courseAddress_not_ends_with: String
  coursePhone: String
  coursePhone_not: String
  coursePhone_in: [String!]
  coursePhone_not_in: [String!]
  coursePhone_lt: String
  coursePhone_lte: String
  coursePhone_gt: String
  coursePhone_gte: String
  coursePhone_contains: String
  coursePhone_not_contains: String
  coursePhone_starts_with: String
  coursePhone_not_starts_with: String
  coursePhone_ends_with: String
  coursePhone_not_ends_with: String
  long: Float
  long_not: Float
  long_in: [Float!]
  long_not_in: [Float!]
  long_lt: Float
  long_lte: Float
  long_gt: Float
  long_gte: Float
  lat: Float
  lat_not: Float
  lat_in: [Float!]
  lat_not_in: [Float!]
  lat_lt: Float
  lat_lte: Float
  lat_gt: Float
  lat_gte: Float
  numberOfHoles: Int
  numberOfHoles_not: Int
  numberOfHoles_in: [Int!]
  numberOfHoles_not_in: [Int!]
  numberOfHoles_lt: Int
  numberOfHoles_lte: Int
  numberOfHoles_gt: Int
  numberOfHoles_gte: Int
  holes_every: HoleWhereInput
  holes_some: HoleWhereInput
  holes_none: HoleWhereInput
  AND: [CourseWhereInput!]
  OR: [CourseWhereInput!]
  NOT: [CourseWhereInput!]
}

input CourseWhereUniqueInput {
  id: ID
}

type Golfer {
  id: ID!
  firstName: String!
  lastName: String!
}

type GolferConnection {
  pageInfo: PageInfo!
  edges: [GolferEdge]!
  aggregate: AggregateGolfer!
}

input GolferCreateInput {
  firstName: String!
  lastName: String!
}

input GolferCreateManyInput {
  create: [GolferCreateInput!]
  connect: [GolferWhereUniqueInput!]
}

type GolferEdge {
  node: Golfer!
  cursor: String!
}

enum GolferOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GolferPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
}

type GolferSubscriptionPayload {
  mutation: MutationType!
  node: Golfer
  updatedFields: [String!]
  previousValues: GolferPreviousValues
}

input GolferSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GolferWhereInput
  AND: [GolferSubscriptionWhereInput!]
  OR: [GolferSubscriptionWhereInput!]
  NOT: [GolferSubscriptionWhereInput!]
}

input GolferUpdateDataInput {
  firstName: String
  lastName: String
}

input GolferUpdateInput {
  firstName: String
  lastName: String
}

input GolferUpdateManyInput {
  create: [GolferCreateInput!]
  delete: [GolferWhereUniqueInput!]
  connect: [GolferWhereUniqueInput!]
  disconnect: [GolferWhereUniqueInput!]
  update: [GolferUpdateWithWhereUniqueNestedInput!]
  upsert: [GolferUpsertWithWhereUniqueNestedInput!]
}

input GolferUpdateWithWhereUniqueNestedInput {
  where: GolferWhereUniqueInput!
  data: GolferUpdateDataInput!
}

input GolferUpsertWithWhereUniqueNestedInput {
  where: GolferWhereUniqueInput!
  update: GolferUpdateDataInput!
  create: GolferCreateInput!
}

input GolferWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  AND: [GolferWhereInput!]
  OR: [GolferWhereInput!]
  NOT: [GolferWhereInput!]
}

input GolferWhereUniqueInput {
  id: ID
}

type Hole {
  id: ID!
  holeNum: Int!
  par: Int!
  blueTee: Int!
  whiteTee: Int!
  redTee: Int!
  scores(where: StrokeWhereInput, orderBy: StrokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stroke!]
}

type HoleConnection {
  pageInfo: PageInfo!
  edges: [HoleEdge]!
  aggregate: AggregateHole!
}

input HoleCreateInput {
  holeNum: Int!
  par: Int!
  blueTee: Int!
  whiteTee: Int!
  redTee: Int!
  scores: StrokeCreateManyInput
}

input HoleCreateManyInput {
  create: [HoleCreateInput!]
  connect: [HoleWhereUniqueInput!]
}

type HoleEdge {
  node: Hole!
  cursor: String!
}

enum HoleOrderByInput {
  id_ASC
  id_DESC
  holeNum_ASC
  holeNum_DESC
  par_ASC
  par_DESC
  blueTee_ASC
  blueTee_DESC
  whiteTee_ASC
  whiteTee_DESC
  redTee_ASC
  redTee_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HolePreviousValues {
  id: ID!
  holeNum: Int!
  par: Int!
  blueTee: Int!
  whiteTee: Int!
  redTee: Int!
}

type HoleSubscriptionPayload {
  mutation: MutationType!
  node: Hole
  updatedFields: [String!]
  previousValues: HolePreviousValues
}

input HoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HoleWhereInput
  AND: [HoleSubscriptionWhereInput!]
  OR: [HoleSubscriptionWhereInput!]
  NOT: [HoleSubscriptionWhereInput!]
}

input HoleUpdateDataInput {
  holeNum: Int
  par: Int
  blueTee: Int
  whiteTee: Int
  redTee: Int
  scores: StrokeUpdateManyInput
}

input HoleUpdateInput {
  holeNum: Int
  par: Int
  blueTee: Int
  whiteTee: Int
  redTee: Int
  scores: StrokeUpdateManyInput
}

input HoleUpdateManyInput {
  create: [HoleCreateInput!]
  delete: [HoleWhereUniqueInput!]
  connect: [HoleWhereUniqueInput!]
  disconnect: [HoleWhereUniqueInput!]
  update: [HoleUpdateWithWhereUniqueNestedInput!]
  upsert: [HoleUpsertWithWhereUniqueNestedInput!]
}

input HoleUpdateWithWhereUniqueNestedInput {
  where: HoleWhereUniqueInput!
  data: HoleUpdateDataInput!
}

input HoleUpsertWithWhereUniqueNestedInput {
  where: HoleWhereUniqueInput!
  update: HoleUpdateDataInput!
  create: HoleCreateInput!
}

input HoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  holeNum: Int
  holeNum_not: Int
  holeNum_in: [Int!]
  holeNum_not_in: [Int!]
  holeNum_lt: Int
  holeNum_lte: Int
  holeNum_gt: Int
  holeNum_gte: Int
  par: Int
  par_not: Int
  par_in: [Int!]
  par_not_in: [Int!]
  par_lt: Int
  par_lte: Int
  par_gt: Int
  par_gte: Int
  blueTee: Int
  blueTee_not: Int
  blueTee_in: [Int!]
  blueTee_not_in: [Int!]
  blueTee_lt: Int
  blueTee_lte: Int
  blueTee_gt: Int
  blueTee_gte: Int
  whiteTee: Int
  whiteTee_not: Int
  whiteTee_in: [Int!]
  whiteTee_not_in: [Int!]
  whiteTee_lt: Int
  whiteTee_lte: Int
  whiteTee_gt: Int
  whiteTee_gte: Int
  redTee: Int
  redTee_not: Int
  redTee_in: [Int!]
  redTee_not_in: [Int!]
  redTee_lt: Int
  redTee_lte: Int
  redTee_gt: Int
  redTee_gte: Int
  scores_every: StrokeWhereInput
  scores_some: StrokeWhereInput
  scores_none: StrokeWhereInput
  AND: [HoleWhereInput!]
  OR: [HoleWhereInput!]
  NOT: [HoleWhereInput!]
}

input HoleWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCourse(data: CourseCreateInput!): Course!
  updateCourse(data: CourseUpdateInput!, where: CourseWhereUniqueInput!): Course
  updateManyCourses(data: CourseUpdateInput!, where: CourseWhereInput): BatchPayload!
  upsertCourse(where: CourseWhereUniqueInput!, create: CourseCreateInput!, update: CourseUpdateInput!): Course!
  deleteCourse(where: CourseWhereUniqueInput!): Course
  deleteManyCourses(where: CourseWhereInput): BatchPayload!
  createGolfer(data: GolferCreateInput!): Golfer!
  updateGolfer(data: GolferUpdateInput!, where: GolferWhereUniqueInput!): Golfer
  updateManyGolfers(data: GolferUpdateInput!, where: GolferWhereInput): BatchPayload!
  upsertGolfer(where: GolferWhereUniqueInput!, create: GolferCreateInput!, update: GolferUpdateInput!): Golfer!
  deleteGolfer(where: GolferWhereUniqueInput!): Golfer
  deleteManyGolfers(where: GolferWhereInput): BatchPayload!
  createHole(data: HoleCreateInput!): Hole!
  updateHole(data: HoleUpdateInput!, where: HoleWhereUniqueInput!): Hole
  updateManyHoles(data: HoleUpdateInput!, where: HoleWhereInput): BatchPayload!
  upsertHole(where: HoleWhereUniqueInput!, create: HoleCreateInput!, update: HoleUpdateInput!): Hole!
  deleteHole(where: HoleWhereUniqueInput!): Hole
  deleteManyHoles(where: HoleWhereInput): BatchPayload!
  createScorecard(data: ScorecardCreateInput!): Scorecard!
  updateScorecard(data: ScorecardUpdateInput!, where: ScorecardWhereUniqueInput!): Scorecard
  updateManyScorecards(data: ScorecardUpdateInput!, where: ScorecardWhereInput): BatchPayload!
  upsertScorecard(where: ScorecardWhereUniqueInput!, create: ScorecardCreateInput!, update: ScorecardUpdateInput!): Scorecard!
  deleteScorecard(where: ScorecardWhereUniqueInput!): Scorecard
  deleteManyScorecards(where: ScorecardWhereInput): BatchPayload!
  createStroke(data: StrokeCreateInput!): Stroke!
  updateStroke(data: StrokeUpdateInput!, where: StrokeWhereUniqueInput!): Stroke
  updateManyStrokes(data: StrokeUpdateInput!, where: StrokeWhereInput): BatchPayload!
  upsertStroke(where: StrokeWhereUniqueInput!, create: StrokeCreateInput!, update: StrokeUpdateInput!): Stroke!
  deleteStroke(where: StrokeWhereUniqueInput!): Stroke
  deleteManyStrokes(where: StrokeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  course(where: CourseWhereUniqueInput!): Course
  courses(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Course]!
  coursesConnection(where: CourseWhereInput, orderBy: CourseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CourseConnection!
  golfer(where: GolferWhereUniqueInput!): Golfer
  golfers(where: GolferWhereInput, orderBy: GolferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Golfer]!
  golfersConnection(where: GolferWhereInput, orderBy: GolferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GolferConnection!
  hole(where: HoleWhereUniqueInput!): Hole
  holes(where: HoleWhereInput, orderBy: HoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hole]!
  holesConnection(where: HoleWhereInput, orderBy: HoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HoleConnection!
  scorecard(where: ScorecardWhereUniqueInput!): Scorecard
  scorecards(where: ScorecardWhereInput, orderBy: ScorecardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Scorecard]!
  scorecardsConnection(where: ScorecardWhereInput, orderBy: ScorecardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScorecardConnection!
  stroke(where: StrokeWhereUniqueInput!): Stroke
  strokes(where: StrokeWhereInput, orderBy: StrokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stroke]!
  strokesConnection(where: StrokeWhereInput, orderBy: StrokeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StrokeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Scorecard {
  id: ID!
  golfers(where: GolferWhereInput, orderBy: GolferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Golfer!]
  course: Course!
  holes(where: HoleWhereInput, orderBy: HoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hole!]
}

type ScorecardConnection {
  pageInfo: PageInfo!
  edges: [ScorecardEdge]!
  aggregate: AggregateScorecard!
}

input ScorecardCreateInput {
  golfers: GolferCreateManyInput
  course: CourseCreateOneInput!
  holes: HoleCreateManyInput
}

type ScorecardEdge {
  node: Scorecard!
  cursor: String!
}

enum ScorecardOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ScorecardPreviousValues {
  id: ID!
}

type ScorecardSubscriptionPayload {
  mutation: MutationType!
  node: Scorecard
  updatedFields: [String!]
  previousValues: ScorecardPreviousValues
}

input ScorecardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScorecardWhereInput
  AND: [ScorecardSubscriptionWhereInput!]
  OR: [ScorecardSubscriptionWhereInput!]
  NOT: [ScorecardSubscriptionWhereInput!]
}

input ScorecardUpdateInput {
  golfers: GolferUpdateManyInput
  course: CourseUpdateOneRequiredInput
  holes: HoleUpdateManyInput
}

input ScorecardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  golfers_every: GolferWhereInput
  golfers_some: GolferWhereInput
  golfers_none: GolferWhereInput
  course: CourseWhereInput
  holes_every: HoleWhereInput
  holes_some: HoleWhereInput
  holes_none: HoleWhereInput
  AND: [ScorecardWhereInput!]
  OR: [ScorecardWhereInput!]
  NOT: [ScorecardWhereInput!]
}

input ScorecardWhereUniqueInput {
  id: ID
}

type Stroke {
  id: ID!
  golfer: User!
  strokes: Int!
}

type StrokeConnection {
  pageInfo: PageInfo!
  edges: [StrokeEdge]!
  aggregate: AggregateStroke!
}

input StrokeCreateInput {
  golfer: UserCreateOneInput!
  strokes: Int!
}

input StrokeCreateManyInput {
  create: [StrokeCreateInput!]
  connect: [StrokeWhereUniqueInput!]
}

type StrokeEdge {
  node: Stroke!
  cursor: String!
}

enum StrokeOrderByInput {
  id_ASC
  id_DESC
  strokes_ASC
  strokes_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StrokePreviousValues {
  id: ID!
  strokes: Int!
}

type StrokeSubscriptionPayload {
  mutation: MutationType!
  node: Stroke
  updatedFields: [String!]
  previousValues: StrokePreviousValues
}

input StrokeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StrokeWhereInput
  AND: [StrokeSubscriptionWhereInput!]
  OR: [StrokeSubscriptionWhereInput!]
  NOT: [StrokeSubscriptionWhereInput!]
}

input StrokeUpdateDataInput {
  golfer: UserUpdateOneRequiredInput
  strokes: Int
}

input StrokeUpdateInput {
  golfer: UserUpdateOneRequiredInput
  strokes: Int
}

input StrokeUpdateManyInput {
  create: [StrokeCreateInput!]
  delete: [StrokeWhereUniqueInput!]
  connect: [StrokeWhereUniqueInput!]
  disconnect: [StrokeWhereUniqueInput!]
  update: [StrokeUpdateWithWhereUniqueNestedInput!]
  upsert: [StrokeUpsertWithWhereUniqueNestedInput!]
}

input StrokeUpdateWithWhereUniqueNestedInput {
  where: StrokeWhereUniqueInput!
  data: StrokeUpdateDataInput!
}

input StrokeUpsertWithWhereUniqueNestedInput {
  where: StrokeWhereUniqueInput!
  update: StrokeUpdateDataInput!
  create: StrokeCreateInput!
}

input StrokeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  golfer: UserWhereInput
  strokes: Int
  strokes_not: Int
  strokes_in: [Int!]
  strokes_not_in: [Int!]
  strokes_lt: Int
  strokes_lte: Int
  strokes_gt: Int
  strokes_gte: Int
  AND: [StrokeWhereInput!]
  OR: [StrokeWhereInput!]
  NOT: [StrokeWhereInput!]
}

input StrokeWhereUniqueInput {
  id: ID
}

type Subscription {
  course(where: CourseSubscriptionWhereInput): CourseSubscriptionPayload
  golfer(where: GolferSubscriptionWhereInput): GolferSubscriptionPayload
  hole(where: HoleSubscriptionWhereInput): HoleSubscriptionPayload
  scorecard(where: ScorecardSubscriptionWhereInput): ScorecardSubscriptionPayload
  stroke(where: StrokeSubscriptionWhereInput): StrokeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
  password: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  password: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
  password: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    