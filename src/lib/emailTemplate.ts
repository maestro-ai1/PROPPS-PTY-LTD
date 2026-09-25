// src/lib/emailTemplate.ts
// WebForge v10.0 Mandatory LIGHT shell email builder
import { SITE, REPLY } from '../config/site.js';
import { brandSealHtml } from './invoiceTemplate.js';
import { encodeAt } from './order.js';

export interface EmailRow {
  label: string;
  value?: string;
  html?: string;
  mono?: boolean;
  heading?: boolean;
  highlight?: boolean;
  block?: boolean;
}

export interface EmailTemplateOpts {
  title: string;
  preheader?: string;
  intro?: string;
  refBadge?: string;
  rows: EmailRow[];
  afterRows?: string;
  cta?: { label: string; url: string };
  secondaryCta?: { label: string; url: string };
  footer?: string;
  footerButtons?: { label: string; url: string; variant: 'gold' | 'green' | 'outline' }[];
  primaryColor?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildEmailHtml(opts: EmailTemplateOpts): string {
  const accent = opts.primaryColor || REPLY.brand.primary;
  const headerDark = REPLY.brand.headerDark;
  const preheaderText = opts.preheader ? opts.preheader : opts.title;

  const rowsMarkup = opts.rows
    .map((row) => {
      if (row.heading) {
        return `
          <tr>
            <td colspan="2" style="padding: 18px 0 8px 0; border-bottom: 2px solid ${accent}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: ${accent};">
              ${escapeHtml(row.label)}
            </td>
          </tr>
        `;
      }

      if (row.block) {
        return `
          <tr>
            <td colspan="2" style="padding: 12px 14px; background-color: #F8F6F2; border-left: 3px solid ${accent}; border-radius: 4px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13.5px; line-height: 1.6; color: #1A1414; white-space: pre-wrap;">
              ${row.html || escapeHtml(row.value || '')}
            </td>
          </tr>
        `;
      }

      if (row.highlight) {
        const valContent = row.html || (row.value ? escapeHtml(row.value) : '');
        return `
          <tr>
            <td style="padding: 16px 0 12px 0; border-top: 2px solid ${accent}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; font-weight: 700; color: #1A1414; text-transform: uppercase; letter-spacing: 0.5px;">
              ${escapeHtml(row.label)}
            </td>
            <td style="padding: 16px 0 12px 0; border-top: 2px solid ${accent}; text-align: right; font-family: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 22px; font-weight: 700; color: ${accent};">
              ${valContent}
            </td>
          </tr>
        `;
      }

      const labelStyle = `padding: 9px 0; border-bottom: 1px solid #EAE3DC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #6F665F; width: 42%; vertical-align: top;`;
      const fontFam = row.mono
        ? `'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace`
        : `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
      const valStyle = `padding: 9px 0; border-bottom: 1px solid #EAE3DC; font-family: ${fontFam}; font-size: 13.5px; font-weight: 500; color: #1A1414; text-align: right; vertical-align: top; word-break: break-word;`;

      const valContent = row.html || (row.value ? escapeHtml(row.value) : '');
      return `
        <tr>
          <td style="${labelStyle}">${escapeHtml(row.label)}</td>
          <td style="${valStyle}">${valContent}</td>
        </tr>
      `;
    })
    .join('');

  const ctaButtons =
    opts.cta || opts.secondaryCta
      ? `
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 28px 0 10px 0; width: 100%;">
          <tr>
            <td align="center">
              ${
                opts.cta
                  ? `
                <a href="${escapeHtml(opts.cta.url)}" target="_blank" style="display: inline-block; padding: 13px 26px; background-color: ${accent}; color: #0D1512; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 6px; letter-spacing: 0.5px; margin: 0 6px 8px 6px;">
                  ${escapeHtml(opts.cta.label)}
                </a>
              `
                  : ''
              }
              ${
                opts.secondaryCta
                  ? `
                <a href="${escapeHtml(opts.secondaryCta.url)}" target="_blank" style="display: inline-block; padding: 12px 24px; background-color: transparent; border: 1.5px solid ${accent}; color: ${accent}; text-decoration: none; font-weight: 600; font-size: 13px; border-radius: 6px; margin: 0 6px 8px 6px;">
                  ${escapeHtml(opts.secondaryCta.label)}
                </a>
              `
                  : ''
              }
            </td>
          </tr>
        </table>
      `
      : '';

  const footerButtonsHtml = (opts.footerButtons || []).length
    ? `<div style="margin: 0 0 14px 0;">${(opts.footerButtons || [])
        .map((b) => {
          const style =
            b.variant === 'gold'
              ? `background-color: ${accent}; color: #0D1512;`
              : b.variant === 'green'
                ? 'background-color: #25D366; color: #06210F;'
                : `background-color: #FFFFFF; color: #8A6B25; border: 1.5px solid ${accent};`;
          return `<a href="${encodeAt(escapeHtml(b.url))}" target="_blank" style="display: inline-block; margin: 0 4px 8px 4px; padding: 12px 18px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 8px; ${style}">${escapeHtml(b.label)}</a>`;
        })
        .join('')}</div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(opts.title)}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #F4F0EA; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
  <div style="display: none; max-height: 0px; overflow: hidden; opacity: 0;">
    ${escapeHtml(preheaderText)}
  </div>
  
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="center">
    <tr>
      <td align="center">
        <!-- Main Container Card (LIGHT SHELL) -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.06); border: 1px solid #EAE3DC;">
          
          <!-- Dark Brand Header Band -->
          <tr>
            <td style="padding: 26px 32px; background-color: ${headerDark}; border-bottom: 3px solid ${accent};">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="58" valign="middle">${brandSealHtml(44)}</td>
<td valign="middle">
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: 1.5px; text-transform: uppercase;">
                      ${escapeHtml(SITE.name)}
                    </div>
                    ${
                      REPLY.headerTagline
                        ? `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11.5px; color: #C5A059; margin-top: 4px; letter-spacing: 0.5px;">${escapeHtml(
                            REPLY.headerTagline
                          )}</div>`
                        : ''
                    }
                  </td>
                  ${
                    REPLY.bizNumber
                      ? `
                    <td align="right" style="vertical-align: middle;">
                      <span style="display: inline-block; padding: 4px 9px; border: 1px solid rgba(197, 160, 89, 0.5); border-radius: 4px; font-family: 'SF Mono', Consolas, monospace; font-size: 10px; color: #E5C378; letter-spacing: 0.5px;">
                        ${escapeHtml(REPLY.bizNumber.label)}: ${escapeHtml(REPLY.bizNumber.value)}
                      </span>
                    </td>
                  `
                      : ''
                  }
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content Area -->
          <tr>
            <td style="padding: 30px 32px 10px 32px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <h1 style="margin: 0 0 10px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 20px; font-weight: 700; color: #1A1414; line-height: 1.3;">
                      ${escapeHtml(opts.title)}
                    </h1>
                    ${
                      opts.refBadge
                        ? `
                      <div style="margin-bottom: 16px;">
                        <span style="display: inline-block; padding: 4px 10px; border: 1.5px solid ${accent}; border-radius: 20px; font-family: 'SF Mono', Consolas, monospace; font-size: 12px; font-weight: 700; color: #1A1414; background-color: #FDFBF7;">
                          REF: ${escapeHtml(opts.refBadge)}
                        </span>
                      </div>
                    `
                        : ''
                    }
                    ${
                      opts.intro
                        ? `
                      <p style="margin: 0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14.5px; line-height: 1.6; color: #3A322C;">
                        ${escapeHtml(opts.intro)}
                      </p>
                    `
                        : ''
                    }
                  </td>
                </tr>
              </table>

              <!-- Rows Data Table -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                ${rowsMarkup}
              </table>

              ${
                opts.afterRows
                  ? `
                <div style="margin: 20px 0; padding: 16px; background-color: #FAF8F5; border-radius: 8px; border: 1px solid #ECE5DC;">
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #6F665F; margin-bottom: 10px;">
                    Important Notice &amp; Terms
                  </div>
                  ${opts.afterRows}
                </div>
              `
                  : ''
              }

              ${ctaButtons}
            </td>
          </tr>

          <!-- Light Footer -->
          <tr>
            <td style="padding: 22px 32px; background-color: #F7F4F0; border-top: 1px solid #EAE3DC; text-align: center;">
              ${footerButtonsHtml}
              <p style="margin: 0 0 6px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11.5px; color: #6F665F; line-height: 1.5;">
                ${escapeHtml(SITE.name)} · Melbourne, Victoria Australia<br>
                For motion picture, theatrical, television, and visual arts simulation only. Non-legal tender.
              </p>
              ${
                opts.footer
                  ? `<p style="margin: 6px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #8F867E;">${escapeHtml(
                      opts.footer
                    )}</p>`
                  : ''
              }
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
