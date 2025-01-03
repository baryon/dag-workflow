// 任务注册中心
// 动态注册和管理任务
// 任务接口
// 每个任务遵循统一的接口，支持动态扩展和热插拔。
import { type ZodSchema, z } from "zod";

export interface TaskInput {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any; // 输入参数
}

export interface TaskOutput {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [key: string]: any; // 输出结果
}

export interface Task {
  name?: string; // 任务名称
  inputSchema?: ZodSchema; // 使用 zod 定义输入的 schema
  outputSchema?: ZodSchema; // 使用 zod 定义输出的 schema
  execute(input: TaskInput): Promise<TaskOutput>; // 执行逻辑
}
