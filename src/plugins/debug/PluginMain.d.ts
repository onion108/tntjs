import { Plugin, Renderable } from "runtime/Pluggable";
export declare class PluginMain implements Plugin {
    get id(): string;
    get rendererList(): Renderable[];
    get tags(): string[];
    get version(): string;
    onInit(): void;
}
