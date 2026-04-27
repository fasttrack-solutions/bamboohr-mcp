import { z } from "zod";
export declare const EmployeeIdSchema: z.ZodObject<{
    employeeId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
}, {
    employeeId: string;
}>;
export declare const DateRangeSchema: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, "strip", z.ZodTypeAny, {
    start: string;
    end: string;
}, {
    start: string;
    end: string;
}>;
export declare const GetEmployeeSchema: z.ZodObject<{
    employeeId: z.ZodString;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    fields?: string | undefined;
}, {
    employeeId: string;
    fields?: string | undefined;
}>;
export declare const ListEmployeesSchema: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const CreateEmployeeSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    workEmail: z.ZodOptional<z.ZodString>;
    department: z.ZodOptional<z.ZodString>;
    jobTitle: z.ZodOptional<z.ZodString>;
    hireDate: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    employmentStatus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    workEmail?: string | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    hireDate?: string | undefined;
    location?: string | undefined;
    employmentStatus?: string | undefined;
}, {
    firstName: string;
    lastName: string;
    workEmail?: string | undefined;
    department?: string | undefined;
    jobTitle?: string | undefined;
    hireDate?: string | undefined;
    location?: string | undefined;
    employmentStatus?: string | undefined;
}>;
export declare const UpdateEmployeeSchema: z.ZodObject<{
    employeeId: z.ZodString;
    fields: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    fields: Record<string, unknown>;
}, {
    employeeId: string;
    fields: Record<string, unknown>;
}>;
export declare const GetTimeOffRequestsSchema: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
    employeeId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["approved", "denied", "superceded", "requested", "canceled"]>>;
    type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    start: string;
    end: string;
    employeeId?: string | undefined;
    type?: string | undefined;
    status?: "approved" | "denied" | "superceded" | "requested" | "canceled" | undefined;
}, {
    start: string;
    end: string;
    employeeId?: string | undefined;
    type?: string | undefined;
    status?: "approved" | "denied" | "superceded" | "requested" | "canceled" | undefined;
}>;
export declare const CreateTimeOffRequestSchema: z.ZodObject<{
    employeeId: z.ZodString;
    timeOffTypeId: z.ZodString;
    start: z.ZodString;
    end: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    start: string;
    end: string;
    timeOffTypeId: string;
    notes?: string | undefined;
}, {
    employeeId: string;
    start: string;
    end: string;
    timeOffTypeId: string;
    notes?: string | undefined;
}>;
export declare const UpdateTimeOffStatusSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodEnum<["approved", "denied", "canceled"]>;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "approved" | "denied" | "canceled";
    requestId: string;
    note?: string | undefined;
}, {
    status: "approved" | "denied" | "canceled";
    requestId: string;
    note?: string | undefined;
}>;
export declare const GetTimeOffBalanceSchema: z.ZodObject<{
    employeeId: z.ZodString;
    date: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    date?: string | undefined;
}, {
    employeeId: string;
    date?: string | undefined;
}>;
export declare const GetWhosOutSchema: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, "strip", z.ZodTypeAny, {
    start: string;
    end: string;
}, {
    start: string;
    end: string;
}>;
export declare const GetTimesheetEntriesSchema: z.ZodObject<{
    employeeId: z.ZodOptional<z.ZodString>;
    start: z.ZodString;
    end: z.ZodString;
}, "strip", z.ZodTypeAny, {
    start: string;
    end: string;
    employeeId?: string | undefined;
}, {
    start: string;
    end: string;
    employeeId?: string | undefined;
}>;
export declare const ClockInSchema: z.ZodObject<{
    employeeId: z.ZodString;
    clockInTime: z.ZodOptional<z.ZodString>;
    note: z.ZodOptional<z.ZodString>;
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    note?: string | undefined;
    clockInTime?: string | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
}, {
    employeeId: string;
    note?: string | undefined;
    clockInTime?: string | undefined;
    latitude?: number | undefined;
    longitude?: number | undefined;
}>;
export declare const ClockOutSchema: z.ZodObject<{
    employeeId: z.ZodString;
    clockOutTime: z.ZodOptional<z.ZodString>;
    latitude: z.ZodOptional<z.ZodNumber>;
    longitude: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
    clockOutTime?: string | undefined;
}, {
    employeeId: string;
    latitude?: number | undefined;
    longitude?: number | undefined;
    clockOutTime?: string | undefined;
}>;
export declare const CreateHourEntriesSchema: z.ZodObject<{
    employeeId: z.ZodString;
    date: z.ZodString;
    hours: z.ZodNumber;
    note: z.ZodOptional<z.ZodString>;
    projectId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    date: string;
    hours: number;
    note?: string | undefined;
    projectId?: string | undefined;
}, {
    employeeId: string;
    date: string;
    hours: number;
    note?: string | undefined;
    projectId?: string | undefined;
}>;
export declare const CreateJobOpeningSchema: z.ZodObject<{
    jobTitle: z.ZodString;
    department: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    hiringLead: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    employmentType: z.ZodOptional<z.ZodEnum<["Full-Time", "Part-Time", "Contract", "Temp"]>>;
}, "strip", z.ZodTypeAny, {
    jobTitle: string;
    department?: string | undefined;
    location?: string | undefined;
    hiringLead?: string | undefined;
    description?: string | undefined;
    employmentType?: "Full-Time" | "Part-Time" | "Contract" | "Temp" | undefined;
}, {
    jobTitle: string;
    department?: string | undefined;
    location?: string | undefined;
    hiringLead?: string | undefined;
    description?: string | undefined;
    employmentType?: "Full-Time" | "Part-Time" | "Contract" | "Temp" | undefined;
}>;
export declare const CreateCandidateSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    jobId: z.ZodOptional<z.ZodString>;
    resume: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    jobId?: string | undefined;
    resume?: string | undefined;
}, {
    firstName: string;
    lastName: string;
    email?: string | undefined;
    phone?: string | undefined;
    address?: string | undefined;
    jobId?: string | undefined;
    resume?: string | undefined;
}>;
export declare const GetJobApplicationsSchema: z.ZodObject<{
    jobId: z.ZodString;
    statusId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    jobId: string;
    statusId?: string | undefined;
}, {
    jobId: string;
    statusId?: string | undefined;
}>;
export declare const UpdateApplicantStatusSchema: z.ZodObject<{
    applicationId: z.ZodString;
    statusId: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    statusId: string;
    applicationId: string;
    note?: string | undefined;
}, {
    statusId: string;
    applicationId: string;
    note?: string | undefined;
}>;
export declare const EmployeeBenefitsSchema: z.ZodObject<{
    employeeId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
}, {
    employeeId: string;
}>;
export declare const CreateDependentSchema: z.ZodObject<{
    employeeId: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    relationship: z.ZodString;
    dateOfBirth: z.ZodOptional<z.ZodString>;
    ssn: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<["Male", "Female", "Other"]>>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    firstName: string;
    lastName: string;
    relationship: string;
    dateOfBirth?: string | undefined;
    ssn?: string | undefined;
    gender?: "Male" | "Female" | "Other" | undefined;
}, {
    employeeId: string;
    firstName: string;
    lastName: string;
    relationship: string;
    dateOfBirth?: string | undefined;
    ssn?: string | undefined;
    gender?: "Male" | "Female" | "Other" | undefined;
}>;
export declare const RunReportSchema: z.ZodObject<{
    reportId: z.ZodString;
    format: z.ZodDefault<z.ZodEnum<["JSON", "CSV", "XLS", "XML", "PDF"]>>;
    fd: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reportId: string;
    format: "JSON" | "CSV" | "XLS" | "XML" | "PDF";
    fd?: string | undefined;
}, {
    reportId: string;
    format?: "JSON" | "CSV" | "XLS" | "XML" | "PDF" | undefined;
    fd?: string | undefined;
}>;
export declare const QueryDatasetSchema: z.ZodObject<{
    datasetId: z.ZodString;
    fields: z.ZodArray<z.ZodString, "many">;
    filters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    fields: string[];
    datasetId: string;
    filters?: Record<string, unknown> | undefined;
    limit?: number | undefined;
}, {
    fields: string[];
    datasetId: string;
    filters?: Record<string, unknown> | undefined;
    limit?: number | undefined;
}>;
export declare const GetEmployeeTrainingsSchema: z.ZodObject<{
    employeeId: z.ZodString;
    completed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    completed?: boolean | undefined;
}, {
    employeeId: string;
    completed?: boolean | undefined;
}>;
export declare const CreateTrainingRecordSchema: z.ZodObject<{
    employeeId: z.ZodString;
    trainingTypeId: z.ZodString;
    completedDate: z.ZodOptional<z.ZodString>;
    dueDate: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNumber>;
    instructor: z.ZodOptional<z.ZodString>;
    hours: z.ZodOptional<z.ZodNumber>;
    credits: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<["completed", "scheduled", "due"]>>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    trainingTypeId: string;
    status?: "completed" | "scheduled" | "due" | undefined;
    notes?: string | undefined;
    hours?: number | undefined;
    completedDate?: string | undefined;
    dueDate?: string | undefined;
    cost?: number | undefined;
    instructor?: string | undefined;
    credits?: number | undefined;
}, {
    employeeId: string;
    trainingTypeId: string;
    status?: "completed" | "scheduled" | "due" | undefined;
    notes?: string | undefined;
    hours?: number | undefined;
    completedDate?: string | undefined;
    dueDate?: string | undefined;
    cost?: number | undefined;
    instructor?: string | undefined;
    credits?: number | undefined;
}>;
export declare const CreateTrainingTypeSchema: z.ZodObject<{
    name: z.ZodString;
    renewable: z.ZodOptional<z.ZodBoolean>;
    frequency: z.ZodOptional<z.ZodNumber>;
    dueFromHireDate: z.ZodOptional<z.ZodNumber>;
    categoryId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    renewable?: boolean | undefined;
    frequency?: number | undefined;
    dueFromHireDate?: number | undefined;
    categoryId?: string | undefined;
}, {
    name: string;
    renewable?: boolean | undefined;
    frequency?: number | undefined;
    dueFromHireDate?: number | undefined;
    categoryId?: string | undefined;
}>;
export declare const ListGoalsSchema: z.ZodObject<{
    employeeId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
}, {
    employeeId: string;
}>;
export declare const CreateGoalSchema: z.ZodObject<{
    employeeId: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    dueDate: z.ZodOptional<z.ZodString>;
    percentComplete: z.ZodOptional<z.ZodNumber>;
    alignsWithOptionId: z.ZodOptional<z.ZodString>;
    sharedWithEmployeeIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    milestones: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        dueDate: z.ZodOptional<z.ZodString>;
        percentComplete: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        dueDate?: string | undefined;
        percentComplete?: number | undefined;
    }, {
        title: string;
        dueDate?: string | undefined;
        percentComplete?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    title: string;
    description?: string | undefined;
    dueDate?: string | undefined;
    percentComplete?: number | undefined;
    alignsWithOptionId?: string | undefined;
    sharedWithEmployeeIds?: string[] | undefined;
    milestones?: {
        title: string;
        dueDate?: string | undefined;
        percentComplete?: number | undefined;
    }[] | undefined;
}, {
    employeeId: string;
    title: string;
    description?: string | undefined;
    dueDate?: string | undefined;
    percentComplete?: number | undefined;
    alignsWithOptionId?: string | undefined;
    sharedWithEmployeeIds?: string[] | undefined;
    milestones?: {
        title: string;
        dueDate?: string | undefined;
        percentComplete?: number | undefined;
    }[] | undefined;
}>;
export declare const UpdateGoalProgressSchema: z.ZodObject<{
    goalId: z.ZodString;
    percentComplete: z.ZodNumber;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    percentComplete: number;
    goalId: string;
    note?: string | undefined;
}, {
    percentComplete: number;
    goalId: string;
    note?: string | undefined;
}>;
export declare const CreateWebhookSchema: z.ZodObject<{
    name: z.ZodString;
    monitorFields: z.ZodArray<z.ZodString, "many">;
    postFields: z.ZodRecord<z.ZodString, z.ZodString>;
    url: z.ZodString;
    format: z.ZodDefault<z.ZodEnum<["json", "form-encoded"]>>;
    privateKey: z.ZodOptional<z.ZodString>;
    includeCompanyDomain: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    url: string;
    format: "json" | "form-encoded";
    name: string;
    monitorFields: string[];
    postFields: Record<string, string>;
    privateKey?: string | undefined;
    includeCompanyDomain?: boolean | undefined;
}, {
    url: string;
    name: string;
    monitorFields: string[];
    postFields: Record<string, string>;
    format?: "json" | "form-encoded" | undefined;
    privateKey?: string | undefined;
    includeCompanyDomain?: boolean | undefined;
}>;
export declare const GetWebhookLogsSchema: z.ZodObject<{
    webhookId: z.ZodString;
    lastAttemptedDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    webhookId: string;
    lastAttemptedDate?: string | undefined;
}, {
    webhookId: string;
    lastAttemptedDate?: string | undefined;
}>;
export declare const UploadEmployeeFileSchema: z.ZodObject<{
    employeeId: z.ZodString;
    fileName: z.ZodString;
    fileContent: z.ZodString;
    categoryId: z.ZodOptional<z.ZodString>;
    shareWithEmployee: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
    fileName: string;
    fileContent: string;
    categoryId?: string | undefined;
    shareWithEmployee?: boolean | undefined;
}, {
    employeeId: string;
    fileName: string;
    fileContent: string;
    categoryId?: string | undefined;
    shareWithEmployee?: boolean | undefined;
}>;
export declare const GetEmployeeFilesSchema: z.ZodObject<{
    employeeId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    employeeId: string;
}, {
    employeeId: string;
}>;
//# sourceMappingURL=types.d.ts.map