define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * These are the defaults, but they also act as the list of all compiler options
     * which are parsed in the query params.
     */
    function getDefaultSandboxCompilerOptions(config, monaco) {
        const settings = {
            noImplicitAny: true,
            strictNullChecks: !config.useJavaScript,
            strictFunctionTypes: true,
            strictPropertyInitialization: true,
            strictBindCallApply: true,
            noImplicitThis: true,
            noImplicitReturns: true,
            // 3.7 off, 3.8 on I think
            useDefineForClassFields: false,
            alwaysStrict: true,
            allowUnreachableCode: false,
            allowUnusedLabels: false,
            downlevelIteration: false,
            noEmitHelpers: false,
            noLib: false,
            noStrictGenericChecks: false,
            noUnusedLocals: false,
            noUnusedParameters: false,
            esModuleInterop: true,
            preserveConstEnums: false,
            removeComments: false,
            skipLibCheck: false,
            checkJs: config.useJavaScript,
            allowJs: config.useJavaScript,
            declaration: true,
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            target: monaco.languages.typescript.ScriptTarget.ES2017,
            jsx: monaco.languages.typescript.JsxEmit.React,
            module: monaco.languages.typescript.ModuleKind.ESNext,
        };
        return settings;
    }
    exports.getDefaultSandboxCompilerOptions = getDefaultSandboxCompilerOptions;
    /**
     * Loop through all of the entries in the existing compiler options then compare them with the
     * query params and return an object which is the changed settings via the query params
     */
    exports.getCompilerOptionsFromParams = (options, params) => {
        const urlDefaults = Object.entries(options).reduce((acc, [key, value]) => {
            if (params.has(key)) {
                const urlValue = params.get(key);
                if (urlValue === 'true') {
                    acc[key] = true;
                }
                else if (urlValue === 'false') {
                    acc[key] = false;
                }
                else if (!isNaN(parseInt(urlValue, 10))) {
                    acc[key] = parseInt(urlValue, 10);
                }
            }
            return acc;
        }, {});
        return urlDefaults;
    };
    // Can't set sandbox to be the right type because the param would contain this function
    /** Gets a query string representation (hash + queries) */
    exports.getURLQueryWithCompilerOptions = (sandbox, paramOverrides) => {
        const compilerOptions = sandbox.getCompilerOptions();
        const compilerDefaults = sandbox.compilerDefaults;
        const diff = Object.entries(compilerOptions).reduce((acc, [key, value]) => {
            if (value !== compilerDefaults[key]) {
                // @ts-ignore
                acc[key] = compilerOptions[key];
            }
            return acc;
        }, {});
        // The text of the TS/JS as the hash
        const hash = `code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`;
        let urlParams = Object.assign({}, diff);
        for (const param of ['lib', 'ts']) {
            const params = new URLSearchParams(location.search);
            if (params.has(param)) {
                // Special case the nightly where it uses the TS version to hardcode
                // the nightly build
                if (param === 'ts' && params.get(param) === 'Nightly') {
                    urlParams['ts'] = sandbox.ts.version;
                }
                else {
                    urlParams['ts'] = params.get(param);
                }
            }
        }
        // Support sending the selection
        const s = sandbox.editor.getSelection();
        if ((s && s.selectionStartLineNumber !== s.positionLineNumber) ||
            (s && s.selectionStartColumn !== s.positionColumn)) {
            urlParams['ssl'] = s.selectionStartLineNumber;
            urlParams['ssc'] = s.selectionStartColumn;
            urlParams['pln'] = s.positionLineNumber;
            urlParams['pc'] = s.positionColumn;
        }
        if (sandbox.config.useJavaScript)
            urlParams['useJavaScript'] = true;
        if (paramOverrides) {
            urlParams = Object.assign(Object.assign({}, urlParams), paramOverrides);
        }
        if (Object.keys(urlParams).length > 0) {
            const queryString = Object.entries(urlParams)
                .filter(([_k, v]) => Boolean(v))
                .map(([key, value]) => {
                return `${key}=${encodeURIComponent(value)}`;
            })
                .join('&');
            return `?${queryString}#${hash}`;
        }
        else {
            return `#${hash}`;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2FuZGJveC9zcmMvY29tcGlsZXJPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BOzs7T0FHRztJQUNILFNBQWdCLGdDQUFnQyxDQUFDLE1BQXdCLEVBQUUsTUFBYztRQUN2RixNQUFNLFFBQVEsR0FBb0I7WUFDaEMsYUFBYSxFQUFFLElBQUk7WUFDbkIsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUN2QyxtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLDRCQUE0QixFQUFFLElBQUk7WUFDbEMsbUJBQW1CLEVBQUUsSUFBSTtZQUN6QixjQUFjLEVBQUUsSUFBSTtZQUNwQixpQkFBaUIsRUFBRSxJQUFJO1lBRXZCLDBCQUEwQjtZQUMxQix1QkFBdUIsRUFBRSxLQUFLO1lBRTlCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLG9CQUFvQixFQUFFLEtBQUs7WUFDM0IsaUJBQWlCLEVBQUUsS0FBSztZQUV4QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLEtBQUssRUFBRSxLQUFLO1lBQ1oscUJBQXFCLEVBQUUsS0FBSztZQUM1QixjQUFjLEVBQUUsS0FBSztZQUNyQixrQkFBa0IsRUFBRSxLQUFLO1lBRXpCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsY0FBYyxFQUFFLEtBQUs7WUFDckIsWUFBWSxFQUFFLEtBQUs7WUFFbkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhO1lBQzdCLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBYTtZQUM3QixXQUFXLEVBQUUsSUFBSTtZQUVqQixzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLHFCQUFxQixFQUFFLElBQUk7WUFFM0IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNO1lBQ3ZE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QUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BCLE9BQU8sR0FBRyxHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBZSxDQUFDLEVBQUUsQ0FBQTtZQUN4RCxDQUFDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRVosT0FBTyxJQUFJLFdBQVcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtTQUNqQzthQUFNO1lBQ0wsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFBO1NBQ2xCO0lBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWdyb3VuZENvbmZpZyB9IGZyb20gJy4nXG5cbnR5cGUgQ29tcGlsZXJPcHRpb25zID0gaW1wb3J0KCdtb25hY28tZWRpdG9yJykubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuQ29tcGlsZXJPcHRpb25zXG50eXBlIE1vbmFjbyA9IHR5cGVvZiBpbXBvcnQoJ21vbmFjby1lZGl0b3InKVxudHlwZSBTYW5kYm94ID0gUmV0dXJuVHlwZTx0eXBlb2YgaW1wb3J0KCcuJykuY3JlYXRlVHlwZVNjcmlwdFNhbmRib3g+XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBkZWZhdWx0cywgYnV0IHRoZXkgYWxzbyBhY3QgYXMgdGhlIGxpc3Qgb2YgYWxsIGNvbXBpbGVyIG9wdGlvbnNcbiAqIHdoaWNoIGFyZSBwYXJzZWQgaW4gdGhlIHF1ZXJ5IHBhcmFtcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTYW5kYm94Q29tcGlsZXJPcHRpb25zKGNvbmZpZzogUGxheWdyb3VuZENvbmZpZywgbW9uYWNvOiBNb25hY28pIHtcbiAgY29uc3Qgc2V0dGluZ3M6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICBub0ltcGxpY2l0QW55OiB0cnVlLFxuICAgIHN0cmljdE51bGxDaGVja3M6ICFjb25maWcudXNlSmF2YVNjcmlwdCxcbiAgICBzdHJpY3RGdW5jdGlvblR5cGVzOiB0cnVlLFxuICAgIHN0cmljdFByb3BlcnR5SW5pdGlhbGl6YXRpb246IHRydWUsXG4gICAgc3RyaWN0QmluZENhbGxBcHBseTogdHJ1ZSxcbiAgICBub0ltcGxpY2l0VGhpczogdHJ1ZSxcbiAgICBub0ltcGxpY2l0UmV0dXJuczogdHJ1ZSxcblxuICAgIC8vIDMuNyBvZmYsIDMuOCBvbiBJIHRoaW5rXG4gICAgdXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHM6IGZhbHNlLFxuXG4gICAgYWx3YXlzU3RyaWN0OiB0cnVlLFxuICAgIGFsbG93VW5yZWFjaGFibGVDb2RlOiBmYWxzZSxcbiAgICBhbGxvd1VudXNlZExhYmVsczogZmFsc2UsXG5cbiAgICBkb3dubGV2ZWxJdGVyYXRpb246IGZhbHNlLFxuICAgIG5vRW1pdEhlbHBlcnM6IGZhbHNlLFxuICAgIG5vTGliOiBmYWxzZSxcbiAgICBub1N0cmljdEdlbmVyaWNDaGVja3M6IGZhbHNlLFxuICAgIG5vVW51c2VkTG9jYWxzOiBmYWxzZSxcbiAgICBub1VudXNlZFBhcmFtZXRlcnM6IGZhbHNlLFxuXG4gICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgIHByZXNlcnZlQ29uc3RFbnVtczogZmFsc2UsXG4gICAgcmVtb3ZlQ29tbWVudHM6IGZhbHNlLFxuICAgIHNraXBMaWJDaGVjazogZmFsc2UsXG5cbiAgICBjaGVja0pzOiBjb25maWcudXNlSmF2YVNjcmlwdCxcbiAgICBhbGxvd0pzOiBjb25maWcudXNlSmF2YVNjcmlwdCxcbiAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcblxuICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IHRydWUsXG4gICAgZW1pdERlY29yYXRvck1ldGFkYXRhOiB0cnVlLFxuXG4gICAgdGFyZ2V0OiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuU2NyaXB0VGFyZ2V0LkVTMjAxNyxcbiAgICBqc3g6IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Kc3hFbWl0LlJlYWN0LFxuICAgIG1vZHVsZTogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0Lk1vZHVsZUtpbmQuRVNOZXh0LFxuICB9XG5cbiAgcmV0dXJuIHNldHRpbmdzXG59XG5cbi8qKlxuICogTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgZW50cmllcyBpbiB0aGUgZXhpc3RpbmcgY29tcGlsZXIgb3B0aW9ucyB0aGVuIGNvbXBhcmUgdGhlbSB3aXRoIHRoZVxuICogcXVlcnkgcGFyYW1zIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGlzIHRoZSBjaGFuZ2VkIHNldHRpbmdzIHZpYSB0aGUgcXVlcnkgcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21waWxlck9wdGlvbnNGcm9tUGFyYW1zID0gKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpOiBDb21waWxlck9wdGlvbnMgPT4ge1xuICBjb25zdCB1cmxEZWZhdWx0cyA9IE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLnJlZHVjZSgoYWNjOiBhbnksIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChwYXJhbXMuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFZhbHVlID0gcGFyYW1zLmdldChrZXkpIVxuXG4gICAgICBpZiAodXJsVmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICBhY2Nba2V5XSA9IHRydWVcbiAgICAgIH0gZWxzZSBpZiAodXJsVmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgYWNjW2tleV0gPSBmYWxzZVxuICAgICAgfSBlbHNlIGlmICghaXNOYU4ocGFyc2VJbnQodXJsVmFsdWUsIDEwKSkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBwYXJzZUludCh1cmxWYWx1ZSwgMTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICByZXR1cm4gdXJsRGVmYXVsdHNcbn1cblxuLy8gQ2FuJ3Qgc2V0IHNhbmRib3ggdG8gYmUgdGhlIHJpZ2h0IHR5cGUgYmVjYXVzZSB0aGUgcGFyYW0gd291bGQgY29udGFpbiB0aGlzIGZ1bmN0aW9uXG5cbi8qKiBHZXRzIGEgcXVlcnkgc3RyaW5nIHJlcHJlc2VudGF0aW9uIChoYXNoICsgcXVlcmllcykgKi9cbmV4cG9ydCBjb25zdCBnZXRVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMgPSAoc2FuZGJveDogYW55LCBwYXJhbU92ZXJyaWRlcz86IGFueSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGNvbXBpbGVyT3B0aW9ucyA9IHNhbmRib3guZ2V0Q29tcGlsZXJPcHRpb25zKClcbiAgY29uc3QgY29tcGlsZXJEZWZhdWx0cyA9IHNhbmRib3guY29tcGlsZXJEZWZhdWx0c1xuICBjb25zdCBkaWZmID0gT2JqZWN0LmVudHJpZXMoY29tcGlsZXJPcHRpb25zKS5yZWR1Y2UoKGFjYywgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBjb21waWxlckRlZmF1bHRzW2tleV0pIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGFjY1trZXldID0gY29tcGlsZXJPcHRpb25zW2tleV1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0sIHt9KVxuXG4gIC8vIFRoZSB0ZXh0IG9mIHRoZSBUUy9KUyBhcyB0aGUgaGFzaFxuICBjb25zdCBoYXNoID0gYGNvZGUvJHtzYW5kYm94Lmx6c3RyaW5nLmNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50KHNhbmRib3guZ2V0VGV4dCgpKX1gXG5cbiAgbGV0IHVybFBhcmFtczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgZGlmZilcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBbJ2xpYicsICd0cyddKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgaWYgKHBhcmFtcy5oYXMocGFyYW0pKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgdGhlIG5pZ2h0bHkgd2hlcmUgaXQgdXNlcyB0aGUgVFMgdmVyc2lvbiB0byBoYXJkY29kZVxuICAgICAgLy8gdGhlIG5pZ2h0bHkgYnVpbGRcbiAgICAgIGlmIChwYXJhbSA9PT0gJ3RzJyAmJiBwYXJhbXMuZ2V0KHBhcmFtKSA9PT0gJ05pZ2h0bHknKSB7XG4gICAgICAgIHVybFBhcmFtc1sndHMnXSA9IHNhbmRib3gudHMudmVyc2lvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsUGFyYW1zWyd0cyddID0gcGFyYW1zLmdldChwYXJhbSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdXBwb3J0IHNlbmRpbmcgdGhlIHNlbGVjdGlvblxuICBjb25zdCBzID0gc2FuZGJveC5lZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgaWYgKFxuICAgIChzICYmIHMuc2VsZWN0aW9uU3RhcnRMaW5lTnVtYmVyICE9PSBzLnBvc2l0aW9uTGluZU51bWJlcikgfHxcbiAgICAocyAmJiBzLnNlbGVjdGlvblN0YXJ0Q29sdW1uICE9PSBzLnBvc2l0aW9uQ29sdW1uKVxuICApIHtcbiAgICB1cmxQYXJhbXNbJ3NzbCddID0gcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXJcbiAgICB1cmxQYXJhbXNbJ3NzYyddID0gcy5zZWxlY3Rpb25TdGFydENvbHVtblxuICAgIHVybFBhcmFtc1sncGxuJ10gPSBzLnBvc2l0aW9uTGluZU51bWJlclxuICAgIHVybFBhcmFtc1sncGMnXSA9IHMucG9zaXRpb25Db2x1bW5cbiAgfVxuXG4gIGlmIChzYW5kYm94LmNvbmZpZy51c2VKYXZhU2NyaXB0KSB1cmxQYXJhbXNbJ3VzZUphdmFTY3JpcHQnXSA9IHRydWVcblxuICBpZiAocGFyYW1PdmVycmlkZXMpIHtcbiAgICB1cmxQYXJhbXMgPSB7IC4uLnVybFBhcmFtcywgLi4ucGFyYW1PdmVycmlkZXMgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKHVybFBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmVudHJpZXModXJsUGFyYW1zKVxuICAgICAgLmZpbHRlcigoW19rLCB2XSkgPT4gQm9vbGVhbih2KSlcbiAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpfWBcbiAgICAgIH0pXG4gICAgICAuam9pbignJicpXG5cbiAgICByZXR1cm4gYD8ke3F1ZXJ5U3RyaW5nfSMke2hhc2h9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBgIyR7aGFzaH1gXG4gIH1cbn1cbiJdfQ==