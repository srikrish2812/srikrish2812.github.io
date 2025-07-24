---
layout: post
title: MCP Overview
date: 2025-07-24 01:59:00
description: My understanding of MCP
tags: llm mcp agent
categories: nlp software
thumbnail: assets/img/2025-07-24-mcpoverview/mcp_logo.png
typograms: true
---


MCP is a protocol for building agents that can interact with external tools. It is a way to connect agents to the outside world.

### Making LLMs Truly Useful: The Role of Tool Use and Anthropic's MCP

Large Language Models (LLMs) are powerful, but they have a major limitation:  
**LLMs cannot access real-time or live data out of the box.**  
To overcome this, LLMs need the ability to call external tools or functions—essentially, to perform actions or retrieve information beyond their training data.

#### The Problem with Traditional Tool Use

Traditionally, if you want an LLM to do something it wasn't trained on—like deleting files in Google Drive or renaming documents—you have to define a function for each specific task. For example:

```python
def delete_file_in_drive(file_id):
    # code to delete file
    pass

def rename_file_in_drive(file_id, new_name):
    # code to rename file
    pass
```

This approach quickly becomes unwieldy. As the number of tasks grows, so does the complexity of your codebase, making it hard to scale and maintain.

#### Enter Anthropic's MCP

To address these challenges, Anthropic introduced the **MCP (Modular Command Protocol)**.  
MCP is a set of rules that every tool or service must follow to provide context and capabilities to LLMs in a scalable way.

##### MCP's Three-Tier Architecture

MCP is designed with a clear, three-tier architecture:
{% include figure.liquid loading="eager" path="assets/img/2025-07-24-mcpoverview/mcp_arch.png" class="img-fluid rounded z-depth-1" zoomable=true %}

- **MCP Host:**  
  The platform or environment that acts as a bridge between the user, the LLM, and the MCP Server.  
  _Examples: Cursor, Windsurf_

- **MCP Client:**  
  Protocol clients that maintain a direct connection with the servers.  
  _Example: Internal code in Cursor IDE that communicates with the MCP Server_

- **MCP Server:**  
  The backend server that understands the MCP protocol and provides the actual services.

##### How MCP Communication Works

Here's a high-level overview of the MCP communication workflow:
{% include figure.liquid loading="eager" path="assets/img/2025-07-24-mcpoverview/mcp_workflow.png" class="img-fluid rounded z-depth-1" zoomable=true %}

##### Why MCP Matters

All MCP servers, regardless of their underlying system, speak the same protocol.  
When a service updates its MCP server with new methods, those methods automatically become available to you—**no extra code required**. This means you can scale your LLM's capabilities without ballooning your codebase.
