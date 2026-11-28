# Auth.md

## Site: PROPPS PTY LTD — Australian Cinema Prop Currency

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://aupropmoney.com/shop/ |
| Production Guides | https://aupropmoney.com/blog/ |
| FAQ | https://aupropmoney.com/faq/ |
| Wholesale Studio Supply | https://aupropmoney.com/wholesale/ |
| Compliance Guidelines | https://aupropmoney.com/compliance/ |
| Contact | https://aupropmoney.com/contact/ |
| Products API | https://aupropmoney.com/api/products |
| Categories API | https://aupropmoney.com/api/categories |
| Search API | https://aupropmoney.com/api/search |
| MCP Server | https://aupropmoney.com/api/mcp |

## OAuth Protected Resource Metadata

This site has no protected resources requiring OAuth. Metadata is published per
RFC 9728 at [/.well-known/oauth-protected-resource](https://aupropmoney.com/.well-known/oauth-protected-resource)
and the authorization server metadata (with an `agent_auth` block) is at
[/.well-known/oauth-authorization-server](https://aupropmoney.com/.well-known/oauth-authorization-server).

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All catalog resources are public."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse and prepare order drafts.
Orders are completed by an adult human via WhatsApp or the checkout order form. Minimum order $150 AUD.
