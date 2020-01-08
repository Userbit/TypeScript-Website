import { UI } from './createUI';
export declare const createExporter: (sandbox: {
    config: {
        text: string;
        useJavaScript: boolean;
        compilerOptions: import("monaco-editor").languages.typescript.CompilerOptions;
        monacoSettings?: import("monaco-editor").editor.IEditorOptions | undefined;
        acquireTypes: boolean;
        suppressAutomaticallyGettingDefaultText?: true | undefined;
        suppressAutomaticallyGettingCompilerFlags?: true | undefined;
        logger: {
            log: (...args: any[]) => void;
            error: (...args: any[]) => void;
        };
        domID: string;
    };
    editor: import("monaco-editor").editor.IStandaloneCodeEditor;
    getWorkerProcess: () => Promise<import("typescriptlang-org/static/js/sandbox/tsWorker").TypeScriptWorker>;
    getEmitResult: () => Promise<import("typescript").EmitOutput>;
    getRunnableJS: () => Promise<string>;
    getDTSForCode: () => Promise<string>;
    getDomNode: () => HTMLElement;
    getModel: () => import("monaco-editor").editor.ITextModel;
    getText: () => string;
    setText: (text: string) => void;
    getAST: () => import("typescript").SourceFile;
    ts: typeof import("typescript");
    createTSProgram: () => import("typescript").Program;
    compilerDefaults: import("monaco-editor").languages.typescript.CompilerOptions;
    getCompilerOptions: () => import("monaco-editor").languages.typescript.CompilerOptions;
    setCompilerSettings: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void;
    updateCompilerSetting: (key: string | number, value: any) => void;
    updateCompilerSettings: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void;
    setDidUpdateCompilerSettings: (func: (opts: import("monaco-editor").languages.typescript.CompilerOptions) => void) => void;
    supportedVersions: readonly ["3.7.3", "3.6.3", "3.5.1", "3.3.3", "3.1.6", "3.0.1", "2.8.1", "2.7.2", "2.4.1"];
    lzstring: typeof import("typescriptlang-org/static/js/sandbox/vendor/lzstring.min");
    getURLQueryWithCompilerOptions: (sandbox: any, paramOverrides?: any) => string;
    language: string;
    monaco: typeof import("monaco-editor");
}, monaco: typeof import("monaco-editor"), ui: UI) => {
    openProjectInStackBlitz: () => void;
    openProjectInCodeSandbox: () => void;
    reportIssue: () => Promise<void>;
    copyAsMarkdownIssue: () => Promise<void>;
    copyForChat: () => void;
    copyForChatWithPreview: () => void;
    openInTSAST: () => void;
};
