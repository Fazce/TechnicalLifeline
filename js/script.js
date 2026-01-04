/**
 * Project: Technical Lifeline - Decision Tree for Coding and Git Help
 * Description: A structured decision tree to guide users through common coding and Git issues.
 *              Each node has either a question with options or a result with advice.
 *              It can answer general coding and Git-related issues.
 *              General Coding help covers problems from a selection of other languages and syntax.
 * 
 * Programmer: Daniel Nguyen
 * Date: 01/02/2026
 */
const nodes = {
  start: {
    id: 'start',
    question: 'Choose a path',
    options: [
      { text: 'General Coding Help', next: 'general_intro' },
      { text: 'Git & GitHub Help', next: 'git_intro' }
    ]
  },

  general_intro: {
    id: 'general_intro',
    question: "What's happening?",
    options: [
      { text: 'I see an error message', next: 'general_error' },
      { text: 'Output is wrong', next: 'general_output' },
      { text: "My code won't run at all", next: 'general_wontrun' },
      { text: "I'm not sure what broke", next: 'general_uncertain' },
      { text: 'I see a warning', next: 'general_warning' }
    ]
  },

  general_error: {
    id: 'general_error',
    result: {
      title: {
        javascript: 'JavaScript error message — what it means',
        java: 'Java error message — what it means',
        csharp: 'C# error message — what it means'
      },
      body: {
        javascript: `<p><strong>What to check:</strong> Read the full error and stack trace in the console. Note file/line and narrow to the offending file.</p>
                     <p><strong>Common causes:</strong> potential typos, undefined variables, or wrong variable types used in operation.</p>
                     <p><strong>Suggested searches and solutions:</strong> "Go and check for potential typos and undefined variables in the code. 
                     If the error persists, implement a try-catch block around the line of code that caused the error to catch the error
                     and reveal what the issue is. For more help, search up 'JavaScript how to find Uncaught typeerror' on Google."</p>`,
        java: `<p><strong>What to check:</strong> Read the stack trace; check exception type and line numbers in the stack. Ensure classes/package names and imports are correct.</p>
               <p><strong>Common causes:</strong> potential typos, missing semicolons or brackets, incompatible types, or undeclared variables.</p>
               <p><strong>Suggested commands and solutions:</strong> Compile with <code>javac</code> and/or run with <code>java</code> on your IDE. 
               Search for the exception name and message shown in the console on Google to learn about why the error occurred.</p>`,
        csharp: `<p><strong>What to check:</strong> Try running with <code>dotnet run</code> and inspect the exception and stack trace. Check and verify namespaces and references for typos.</p>
                <p><strong>Common causes:</strong> potential typos, missing semicolons or brackets, incompatible types, or undeclared variables.</p>
                <p><strong>Suggested searches and solutions:</strong> "Compile the C# project and check for errors or exceptions in the output window. 
                Search up the error or exception message on Google to learn about why it occurred."</p>`
      }
    }
  }, 

  general_output: {
    id: 'general_output',
    result: {
      title: {
        javascript: 'Output is wrong — debugging tips (JS)',
        java: 'Output is wrong — debugging tips (Java)',
        csharp: 'Output is wrong — debugging tips (C#)'
      },
      body: {
        javascript: `<p><strong>What to check:</strong> Check inputs and intermediate values. Check to see if there are any issues with the logic or data flow.</p>
                     <p><strong>Suggested search and solutions:</strong> "Use console.log() by putting the function after specific points of code execution to check the output values.
                     You can also debug by using your browser's developer tools. For more information on debugging JavaScript, search 'debug javascript step by step'."</p>`,
        java: `<p><strong>What to check:</strong> Verify input values and check to see if the correct values were used in the program.</p> 
               <p><strong>Suggested search and solutions:</strong> "Check to see if it is an issue with inputs. If that isn't the issue, it's a semantic error (i.e the logic is incorrect). 
               Trace through the code with a debugger or add logging statements to see where the values are going wrong."</p>`,
        csharp: `<p><strong>What to check:</strong>Verify that the inputs of the program are correct and that the program is processing them correctly.</p>
                <p><strong>Suggested search and solutions:</strong> "Use debugging tools in your IDE, or add logging statement to step through the code 
                and inspect variable values at specific points of the runtime."`
      }
    }
  },

  general_wontrun: {
    id: 'general_wontrun',
    result: {
      title: {
        javascript: "My JavaScript code won't run",
        java: "My Java program won't run",
        csharp: "My C# program won't run"
      },
      body: {
        javascript: `<p><strong>Checklist:</strong> Ensure the script is included or run with the correct runtime and check the browser console for syntax errors.</p>
                     <p><strong>Try:</strong> run a minimal example and progressively add code back in.</p>`,
        java: `<p><strong>Checklist:</strong> Compile with <code>javac</code> and check for compile-time errors; ensure a proper <code>main</code> method exists.</p>
               <p><strong>Try:</strong> run a minimal HelloWorld program to confirm environment is set up.</p>`,
        csharp: `<p><strong>Checklist:</strong> Confirm .NET SDK is installed, and try <code>dotnet run</code> in the project directory.</p>`
      }
    }
  },

  general_uncertain: {
    id: 'general_uncertain',
    result: {
      title: {
        javascript: "Not sure what's broken (JS)",
        java: "Not sure what's broken (Java)",
        csharp: "Not sure what's broken (C#)"
      },
      body: {
        javascript: `<p>Reproduce the issue with a minimal example, add logs, and bisect changes to find the regression.</p>`,
        java: `<p>Create a minimal reproducible example and run with a debugger or logs to find failing assumptions.</p>`,
        csharp: `<p>Isolate the problem to a small sample, add logging, and use unit tests or a debugger to inspect behavior.</p>`
      }
    }
  },

  general_warning: {
    id: 'general_warning',
    result: {
      title: {
        javascript: 'You see a warning — what it means',
        java: 'You see a warning — what it means',
        csharp: 'You see a warning — what it means'
      },
      body: {
        javascript: `<p>Warnings are often non-blocking but indicate potential problems - read the message and fix or note it.</p>`,
        java: `<p>Warnings from the compiler or runtime may indicate deprecations or unsafe operations; address when possible.</p>`,
        csharp: `<p>Warnings indicate potential issues; follow suggestions to ensure safer, future-proof code.</p>`
      }
    }
  },

  git_intro: {
    id: 'git_intro',
    question: 'Which Git problem?',
    options: [
      { text: "Git won't let me commit", next: 'git_nocommit' },
      { text: 'Nothing appears on GitHub', next: 'git_notpushed' },
      { text: 'I have a merge conflict', next: 'git_merge_conflict' },
      { text: 'I am confused about remotes/branches', next: 'git_remotes' },
      { text: "I don't know what Git wants me to do", next: 'git_help_wanted' }
    ]
  },

  git_nocommit: {
    id: 'git_nocommit',
    result: {
      title: "Git won't let me commit",
      body: `<p>Run <code>git status</code> to see staged files. Use <code>git add .</code> then <code>git commit -m "msg"</code>.</p>
             <p>Suggested commands: <code>git status</code>, <code>git add .</code>, <code>git commit -m "Initial commit"</code></p>`
    }
  },

  git_notpushed: {
    id: 'git_notpushed',
    result: {
      title: 'Nothing on GitHub',
      body: `<p>Make sure you pushed to the correct remote and branch: <code>git push -u origin main</code>.</p>
             <p>Run <code>git remote -v</code> and <code>git branch -av</code> to verify.</p>`
    }
  },

  git_merge_conflict: {
    id: 'git_merge_conflict',
    result: {
      title: 'You have a merge conflict',
      body: `<p><strong>Why this happens:</strong> Changes in two branches conflict and Git needs help to resolve which code to keep.</p>
             <p><strong>Try:</strong> Run <code>git status</code> to see conflicted files, edit files to resolve, then <code>git add</code> and <code>git commit</code>.</p>
             <p><strong>Suggested search:</strong> "how to resolve git merge conflict"</p>`
    }
  },

  git_remotes: {
    id: 'git_remotes',
    result: {
      title: 'Remotes & branches confusion',
      body: `<p>Check <code>git remote -v</code> to see configured remotes and <code>git branch -av</code> to list branches and their tracking status.</p>
             <p>If you need to set the remote: <code>git remote add origin &lt;url&gt;</code>. To push: <code>git push -u origin branch-name</code>.</p>`
    }
  },

  git_help_wanted: {
    id: 'git_help_wanted',
    result: {
      title: 'Not sure what Git wants',
      body: `<p>Git often expects you to commit staged changes, resolve conflicts, or set an upstream. Run <code>git status</code> to see the next step.</p>
             <p>Suggested commands: <code>git status</code>, <code>git add .</code>, <code>git commit</code>, <code>git push</code></p>`
    }
  }
};